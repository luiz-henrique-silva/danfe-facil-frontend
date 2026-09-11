"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { refreshUser } = useAuth();

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
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.detail || "Não foi possível criar a conta.");
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
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          Nome
        </label>
        <input
          id="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome"
          className="w-full rounded-xl border border-[#d4d4d8] bg-[#f2f2f3] px-4 py-3 text-sm placeholder:text-[#7d7d85] focus:outline-none focus:ring-2 focus:ring-[#22c55e]/50 transition"
        />
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
        <label htmlFor="password" className="block text-sm font-medium mb-1.5">
          Senha
        </label>
        <input
          id="password"
          type="password"
          required
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mínimo 8 caracteres"
          className="w-full rounded-xl border border-[#d4d4d8] bg-[#f2f2f3] px-4 py-3 text-sm placeholder:text-[#7d7d85] focus:outline-none focus:ring-2 focus:ring-[#22c55e]/50 transition"
        />
      </div>

      <div>
        <label htmlFor="confirm" className="block text-sm font-medium mb-1.5">
          Confirmar senha
        </label>
        <input
          id="confirm"
          type="password"
          required
          autoComplete="new-password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          placeholder="Repita a senha"
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
        {loading ? "Criando conta..." : "Criar conta"}
      </button>

      <p className="text-center text-sm text-[#71717a]">
        Já tem conta?{" "}
        <Link href="/login" className="text-[#22c55e] font-medium hover:underline">
          Entrar
        </Link>
      </p>
    </form>
  );
}