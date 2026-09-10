"use client";

import { useState } from "react";
import Link from "next/link";

export default function ResetPasswordForm({ token }: { token: string }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "done" | "error">("idle");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres.");
      return;
    }
    if (password !== confirm) {
      setError("As senhas não conferem.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token, new_password: password }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.detail || "Link inválido ou expirado.");
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch {
      setError("Erro de conexão. Tente novamente.");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  if (status === "done") {
    return (
      <div className="text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-[#22c55e]/10 border border-[#22c55e] flex items-center justify-center text-2xl">
          ✅
        </div>
        <h2 className="mt-4 text-xl font-semibold">Senha redefinida!</h2>
        <p className="mt-2 text-sm text-[#a1a1a1]">
          Sua senha foi alterada com sucesso. Já pode fazer login.
        </p>
        <Link
          href="/login"
          className="mt-6 inline-block rounded-xl bg-[#22c55e] px-6 py-3 text-sm font-semibold text-black hover:bg-[#16a34a] transition-colors"
        >
          Fazer login
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1.5">
          Nova senha
        </label>
        <input
          id="password"
          type="password"
          required
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mínimo 8 caracteres"
          className="w-full rounded-xl border border-[#333333] bg-[#1a1a1a] px-4 py-3 text-sm placeholder:text-[#666666] focus:outline-none focus:ring-2 focus:ring-[#22c55e]/50 transition"
        />
      </div>

      <div>
        <label htmlFor="confirm" className="block text-sm font-medium mb-1.5">
          Confirmar nova senha
        </label>
        <input
          id="confirm"
          type="password"
          required
          autoComplete="new-password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          placeholder="Repita a senha"
          className="w-full rounded-xl border border-[#333333] bg-[#1a1a1a] px-4 py-3 text-sm placeholder:text-[#666666] focus:outline-none focus:ring-2 focus:ring-[#22c55e]/50 transition"
        />
      </div>

      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading || !token}
        className="w-full rounded-xl bg-[#22c55e] py-3 text-sm font-semibold text-black hover:bg-[#16a34a] disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {loading ? "Redefinindo..." : "Redefinir senha"}
      </button>
    </form>
  );
}