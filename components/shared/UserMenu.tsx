"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";

export default function UserMenu() {
  const { user, loading, isAuthenticated, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (loading) {
    return (
      <div className="w-9 h-9 rounded-full bg-[#f2f2f3] border border-[#e4e4e7] animate-pulse" />
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <Link
        href="/login"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f2f2f3] border border-[#d4d4d8] text-sm font-medium hover:bg-[#e8e8ea] transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        Entrar
      </Link>
    );
  }

  const initial = (user.name || user.email).charAt(0).toUpperCase();

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[#f2f2f3] transition-colors"
        aria-label="Menu do usuário"
      >
        <div className="w-8 h-8 rounded-full bg-[#22c55e] text-black font-bold flex items-center justify-center text-sm">
          {initial}
        </div>
        <span className="hidden md:block text-sm max-w-[140px] truncate">
          {user.name || user.email}
        </span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl bg-[#ffffff] border border-[#e4e4e7] shadow-xl shadow-black/10 overflow-hidden z-50">
          <div className="px-4 py-3 border-b border-[#e4e4e7]">
            <p className="text-sm font-medium truncate">{user.name || "Usuário"}</p>
            <p className="text-xs text-[#71717a] truncate">{user.email}</p>
          </div>
          <div className="py-1">
            <Link
              href="/dashboard"
              className="flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-[#e8e8ea] transition-colors"
              onClick={() => setOpen(false)}
            >
              <span aria-hidden>🧾</span> Dashboard
            </Link>
            <Link
              href="/dashboard/assinatura"
              className="flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-[#e8e8ea] transition-colors"
              onClick={() => setOpen(false)}
            >
              <span aria-hidden>💳</span> Assinatura
            </Link>
            <Link
              href="/dashboard/perfil"
              className="flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-[#e8e8ea] transition-colors"
              onClick={() => setOpen(false)}
            >
              <span aria-hidden>⚙️</span> Meu Perfil
            </Link>
          </div>
          <div className="border-t border-[#e4e4e7] py-1">
            <button
              onClick={() => {
                setOpen(false);
                logout();
              }}
              className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-400 hover:bg-[#e8e8ea] transition-colors"
            >
              <span aria-hidden>🚪</span> Sair
            </button>
          </div>
        </div>
      )}
    </div>
  );
}