"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.detail || "Não foi possível enviar o email.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setError("Erro de conexão. Tente novamente.");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-[#22c55e]/10 border border-[#22c55e] flex items-center justify-center text-2xl">
          ✉️
        </div>
        <h2 className="mt-4 text-xl font-semibold">Email enviado!</h2>
        <p className="mt-2 text-sm text-[#71717a]">
          Se existir uma conta com <strong>{email}</strong>, você receberá um
          link para redefinir sua senha em instantes.
        </p>
        <Link
          href="/login"
          className="mt-6 inline-block rounded-xl bg-[#22c55e] px-6 py-3 text-sm font-semibold text-black hover:bg-[#16a34a] transition-colors"
        >
          Voltar para o login
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email cadastrado
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
        {loading ? "Enviando..." : "Enviar link de recuperação"}
      </button>

      <p className="text-center text-sm text-[#71717a]">
        Lembrou a senha?{" "}
        <Link href="/login" className="text-[#22c55e] font-medium hover:underline">
          Fazer login
        </Link>
      </p>
    </form>
  );
}