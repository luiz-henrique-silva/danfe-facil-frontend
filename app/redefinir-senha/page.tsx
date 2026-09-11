import type { Metadata } from "next";
import AuthShell from "@/components/shared/AuthShell";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export const metadata: Metadata = {
  title: "Redefinir senha — UniDANFE",
};

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  if (!token) {
    return (
      <AuthShell
        title="Link inválido"
        subtitle="Este link não é válido ou expirou."
      >
        <p className="text-sm text-[#71717a]">
          Solicite um novo link de recuperação na página de{" "}
          <a href="/esqueci-senha" className="text-[#22c55e] hover:underline">
            esqueci minha senha
          </a>
          .
        </p>
      </AuthShell>
    );
  }

  return (
    <AuthShell title="Redefinir senha" subtitle="Escolha uma nova senha para sua conta.">
      <ResetPasswordForm token={token} />
    </AuthShell>
  );
}