"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { refreshUser } = useAuth();

  useEffect(() => {
    if (searchParams.get("error") === "google") {
      setError("Não foi possível entrar com o Google. Clique novamente para tentar.");
    }
  }, [searchParams]);

  async function handleGoogle() {
    setError("");
    setGoogleLoading(true);
    try {
      const res = await fetch("/api/auth/google");
      const data = await res.json();
      if (!res.ok) {
        setError(data.detail || "Não foi possível entrar com Google.");
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("Erro de conexão. Tente novamente.");
      setGoogleLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.detail || "Não foi possível entrar.");
        return;
      }
      await refreshUser();
      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <button
        type="button"
        onClick={handleGoogle}
        disabled={googleLoading}
        className="w-full rounded-xl border border-[#d4d4d8] bg-[#f2f2f3] py-3 text-sm font-semibold text-[#0a0a0a] hover:bg-[#e8e8ea] disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-3"
      >
        <svg className="h-5 w-5" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
          <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
          <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
          <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
        </svg>
        {googleLoading ? "Redirecionando..." : "Continuar com Google"}
      </button>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-[#d4d4d8]" />
        <span className="text-xs text-[#71717a]">ou entre com email</span>
        <div className="flex-1 h-px bg-[#d4d4d8]" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="voce@email.com"
          className="w-full rounded-xl border border-[#d4d4d8] bg-[#f2f2f3] px-4 py-3 text-sm placeholder:text-[#7d7d85] focus:outline-none focus:ring-2 focus:ring-[#22c55e]/50 transition"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label htmlFor="password" className="block text-sm font-medium">
            Senha
          </label>
          <Link
            href="/esqueci-senha"
            className="text-xs text-[#22c55e] hover:underline"
          >
            Esqueci minha senha
          </Link>
        </div>
        <input
          id="password"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full rounded-xl border border-[#d4d4d8] bg-[#f2f2f3] px-4 py-3 text-sm placeholder:text-[#7d7d85] focus:outline-none focus:ring-2 focus:ring-[#22c55e]/50 transition"
        />
      </div>

      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[#22c55e] py-3 text-sm font-semibold text-black hover:bg-[#16a34a] disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>

      <p className="text-center text-sm text-[#71717a]">
        Não tem conta?{" "}
        <Link href="/cadastro" className="text-[#22c55e] font-medium hover:underline">
          Cadastre-se grátis
        </Link>
      </p>
    </form>
  );
}