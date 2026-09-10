"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CheckoutBannerInner() {
  const params = useSearchParams();
  const status = params.get("checkout");

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#22c55e]/40 bg-[#22c55e]/10 px-6 py-5 text-[#22c55e]">
        <p className="font-semibold">Pagamento processado!</p>
        <p className="text-sm mt-0.5 opacity-80">
          Sua assinatura foi ativada. Já pode aproveitar os benefícios do seu plano.
        </p>
      </div>
    );
  }

  if (status === "cancel") {
    return (
      <div className="rounded-2xl border border-yellow-500/40 bg-yellow-500/10 px-6 py-5 text-yellow-400">
        <p className="font-semibold">Pagamento cancelado</p>
        <p className="text-sm mt-0.5 opacity-80">
          Você pode tentar novamente quando quiser, sem compromisso.
        </p>
      </div>
    );
  }

  return null;
}

export default function CheckoutBanner() {
  return (
    <Suspense fallback={null}>
      <CheckoutBannerInner />
    </Suspense>
  );
}