"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";

export default function Perfil() {
  const { user, refreshUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  // password
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwError, setPwError] = useState("");
  const [pwSaved, setPwSaved] = useState(false);
  const [pwSaving, setPwSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email);
    }
  }, [user]);

  async function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaved(false);
    setSaving(true);
    try {
      const res = await fetch("/api/user/me", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.detail || "Não foi possível salvar.");
        return;
      }
      setSaved(true);
      await refreshUser();
      setTimeout(() => setSaved(false), 3000);
    } catch {
      setError("Erro de conexão.");
    } finally {
      setSaving(false);
    }
  }

  async function handleChangePassword(e: React.FormEvent) {
    e.preventDefault();
    setPwError("");
    setPwSaved(false);

    if (newPassword.length < 8) {
      setPwError("A nova senha deve ter pelo menos 8 caracteres.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPwError("As senhas não conferem.");
      return;
    }

    setPwSaving(true);
    try {
      const res = await fetch("/api/user/change-password", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          current_password: currentPassword,
          new_password: newPassword,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setPwError(data.detail || "Não foi possível alterar a senha.");
        return;
      }
      setPwSaved(true);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setTimeout(() => setPwSaved(false), 3000);
    } catch {
      setPwError("Erro de conexão.");
    } finally {
      setPwSaving(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Meu Perfil</h1>
        <p className="text-sm text-[#a1a1a1] mb-6">
          Gerencie seus dados pessoais e altere sua senha.
        </p>
      </div>

      {/* Dados pessoais */}
      <form
        onSubmit={handleSaveProfile}
        className="rounded-2xl border border-[#2a2a2a] bg-[#141414] p-6 space-y-5"
      >
        <h2 className="font-semibold">Dados pessoais</h2>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">
            Nome
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-[#333333] bg-[#1a1a1a] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e]/50 transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-[#333333] bg-[#1a1a1a] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e]/50 transition"
          />
        </div>

        {error && (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}
        {saved && (
          <div className="rounded-lg border border-[#22c55e]/30 bg-[#22c55e]/10 px-4 py-3 text-sm text-[#22c55e]">
            Dados salvos com sucesso!
          </div>
        )}

        <button
          type="submit"
          disabled={saving}
          className="rounded-xl bg-[#22c55e] px-6 py-2.5 text-sm font-semibold text-black hover:bg-[#16a34a] disabled:opacity-50 transition"
        >
          {saving ? "Salvando..." : "Salvar alterações"}
        </button>
      </form>

      {/* Senha */}
      <form
        onSubmit={handleChangePassword}
        className="rounded-2xl border border-[#2a2a2a] bg-[#141414] p-6 space-y-5"
      >
        <h2 className="font-semibold">Alterar senha</h2>
        <div>
          <label htmlFor="current" className="block text-sm font-medium mb-1.5">
            Senha atual
          </label>
          <input
            id="current"
            type="password"
            autoComplete="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full rounded-xl border border-[#333333] bg-[#1a1a1a] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e]/50 transition"
          />
        </div>
        <div>
          <label htmlFor="new" className="block text-sm font-medium mb-1.5">
            Nova senha
          </label>
          <input
            id="new"
            type="password"
            autoComplete="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full rounded-xl border border-[#333333] bg-[#1a1a1a] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e]/50 transition"
          />
        </div>
        <div>
          <label htmlFor="confirm" className="block text-sm font-medium mb-1.5">
            Confirmar nova senha
          </label>
          <input
            id="confirm"
            type="password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-xl border border-[#333333] bg-[#1a1a1a] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e]/50 transition"
          />
        </div>

        {pwError && (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {pwError}
          </div>
        )}
        {pwSaved && (
          <div className="rounded-lg border border-[#22c55e]/30 bg-[#22c55e]/10 px-4 py-3 text-sm text-[#22c55e]">
            Senha alterada com sucesso!
          </div>
        )}

        <button
          type="submit"
          disabled={pwSaving}
          className="rounded-xl bg-[#22c55e] px-6 py-2.5 text-sm font-semibold text-black hover:bg-[#16a34a] disabled:opacity-50 transition"
        >
          {pwSaving ? "Alterando..." : "Alterar senha"}
        </button>
      </form>
    </div>
  );
}