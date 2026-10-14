import type { Metadata } from "next";
import { Suspense } from "react";
import AuthShell from "@/components/shared/AuthShell";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Entrar — DANFEpro",
};

function LoginFormFallback() {
  return (
    <div className="space-y-5" aria-hidden="true">
      <div className="h-12 rounded-xl border border-[#d4d4d8] bg-[#f2f2f3]/60" />
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-[#d4d4d8]" />
        <span className="text-xs text-[#71717a]">ou entre com email</span>
        <div className="flex-1 h-px bg-[#d4d4d8]" />
      </div>
      <div className="h-[74px] rounded-xl border border-[#d4d4d8] bg-[#f2f2f3]/60" />
      <div className="h-[74px] rounded-xl border border-[#d4d4d8] bg-[#f2f2f3]/60" />
      <div className="h-12 rounded-xl bg-[#22c55e]/60" />
    </div>
  );
}

export default function LoginPage() {
  return (
    <AuthShell title="Entrar" subtitle="Acesse sua conta para processar seus DANFEs.">
      <Suspense fallback={<LoginFormFallback />}>
        <LoginForm />
      </Suspense>
    </AuthShell>
  );
}
