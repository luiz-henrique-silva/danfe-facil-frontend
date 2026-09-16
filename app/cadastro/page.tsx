import type { Metadata } from "next";
import AuthShell from "@/components/shared/AuthShell";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Criar conta — DANFEpro",
};

export default function RegisterPage() {
  return (
    <AuthShell
      title="Criar conta"
      subtitle="Comece grátis. Sem cartão de crédito para testar."
    >
      <RegisterForm />
    </AuthShell>
  );
}