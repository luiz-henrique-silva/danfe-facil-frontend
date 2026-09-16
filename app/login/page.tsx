import type { Metadata } from "next";
import AuthShell from "@/components/shared/AuthShell";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Entrar — DANFEpro",
};

export default function LoginPage() {
  return (
    <AuthShell title="Entrar" subtitle="Acesse sua conta para processar seus DANFEs.">
      <LoginForm />
    </AuthShell>
  );
}