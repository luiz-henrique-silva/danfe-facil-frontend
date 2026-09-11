"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";

export function HeroCTA() {
  const { user } = useAuth();
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      <Link
        href={user ? "/dashboard" : "/cadastro"}
        className="inline-flex items-center gap-2 rounded-xl bg-[#22c55e] px-8 py-4 text-base font-semibold text-black hover:bg-[#16a34a] transition-colors"
      >
        {user ? "Iniciar conversões →" : "Criar conta grátis →"}
      </Link>
      <a
        href="#como-funciona"
        className="inline-flex items-center gap-2 rounded-xl border border-[#d4d4d8] bg-[#ffffff] px-8 py-4 text-base font-medium text-black hover:bg-[#e8e8ea] transition-colors"
      >
        Como funciona
      </a>
    </div>
  );
}

export function BottomCTA() {
  const { user } = useAuth();
  return (
    <Link
      href={user ? "/dashboard" : "/cadastro"}
      className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-[#22c55e] px-10 py-4 text-base font-semibold text-black hover:bg-[#16a34a] transition-colors"
    >
      {user ? "Iniciar conversões →" : "Criar conta grátis →"}
    </Link>
  );
}