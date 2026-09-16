import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

interface TokenResponse {
  access_token?: string;
  refresh_token?: string;
}

const AUTH_PATHS = ["auth/login", "auth/register", "auth/refresh"];
const OAUTH_CALLBACK_PATHS = ["auth/google/callback"];

function setAuthCookies(response: NextResponse, tokens: TokenResponse) {
  if (tokens.access_token) {
    response.cookies.set("df_access", tokens.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 30 * 60,
    });
  }
  if (tokens.refresh_token) {
    response.cookies.set("df_refresh", tokens.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/api",
      maxAge: 7 * 24 * 60 * 60,
    });
  }
}

export async function proxyHandler(
  req: NextRequest,
  ctx: { params: Promise<{ path?: string[] }> }
) {
  const { path } = await ctx.params;
  const pathname = path?.join("/") || "";

  const url = new URL(req.url);
  const target = `${BACKEND_URL}/api/${pathname}${url.search}`;

  const headers = new Headers();
  headers.set("content-type", req.headers.get("content-type") || "application/json");
  const accept = req.headers.get("accept");
  if (accept) headers.set("accept", accept);

  const accessToken = req.cookies.get("df_access")?.value;
  if (accessToken) headers.set("authorization", `Bearer ${accessToken}`);

  const isGetOrHead = req.method === "GET" || req.method === "HEAD";

  let backendRes: Response | undefined;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      backendRes = await fetch(target, {
        method: req.method,
        headers,
        body: isGetOrHead ? undefined : await req.arrayBuffer(),
        cache: "no-store",
        signal: AbortSignal.timeout(45000),
      });
    } catch {
      // rede falhou (ex.: backend reativando no Render) — tenta de novo
      backendRes = undefined;
    }
    if (!backendRes) {
      if (attempt < 2) await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
      continue;
    }
    if (backendRes.status < 500 || !isGetOrHead) break;
    // 5xx: pode ser cold start — uma tentativa a mais
    if (attempt < 2) await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
  }

  if (!backendRes) {
    return new NextResponse(
      JSON.stringify({ detail: "Serviço temporariamente indisponível. Tente novamente." }),
      { status: 503, headers: { "content-type": "application/json" } }
    );
  }

  const responseBody = await backendRes.arrayBuffer();
  const response = new NextResponse(responseBody, {
    status: backendRes.status,
  });

  backendRes.headers.forEach((value, key) => {
    const lower = key.toLowerCase();
    if (
      lower === "set-cookie" ||
      lower === "content-encoding" ||
      lower === "content-length" ||
      lower === "transfer-encoding"
    )
      return;
    response.headers.set(key, value);
  });

  if (
    (AUTH_PATHS.includes(pathname) || OAUTH_CALLBACK_PATHS.includes(pathname)) &&
    backendRes.ok
  ) {
    try {
      const contentType = backendRes.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        const text = new TextDecoder().decode(responseBody);
        const json = JSON.parse(text) as TokenResponse;
        setAuthCookies(response, json);

        if (json.access_token && OAUTH_CALLBACK_PATHS.includes(pathname)) {
          const redirect = new NextResponse(null, {
            status: 303,
            headers: { location: "/" },
          });
          if (json.access_token) {
            redirect.cookies.set("df_access", json.access_token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
              sameSite: "lax",
              path: "/",
              maxAge: 30 * 60,
            });
          }
          if (json.refresh_token) {
            redirect.cookies.set("df_refresh", json.refresh_token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
              sameSite: "lax",
              path: "/api",
              maxAge: 7 * 24 * 60 * 60,
            });
          }
          return redirect;
        }
      }
    } catch {
      // não é JSON com tokens — apenas continua
    }
  }

  return response;
}

export const GET = proxyHandler;
export const POST = proxyHandler;
export const PUT = proxyHandler;
export const PATCH = proxyHandler;
export const DELETE = proxyHandler;
export const OPTIONS = proxyHandler;