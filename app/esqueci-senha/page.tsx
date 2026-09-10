import type { Metadata } from "next";
import AuthShell from "@/components/shared/AuthShell";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Esqueci minha senha — DANFE Fácil",
};

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Esqueci minha senha"
      subtitle="Enviaremos um link de recuperação para seu email."
    >
      <ForgotPasswordForm />
    </AuthShell>
  );
}