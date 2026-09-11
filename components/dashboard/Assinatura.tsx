"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface SubscriptionStatus {
  plan: string;
  status: string;
  current_period_end: string | null;
  process_limit: number | null;
}

const PLANS = [
  {
    id: "pro",
    name: "Pro",
    price: "R$ 29",
    period: "/mês",
    desc: "500 processamentos/mês, lote de PDFs, suporte prioritário.",
    features: ["500 processamentos/mês", "Lote de PDFs", "Térmica, auto e A4"],
  },
  {
    id: "business",
    name: "Business",
    price: "R$ 79",
    period: "/mês",
    desc: "Processamentos ilimitados, suporte dedicado, todos os recursos.",
    features: ["Processamentos ilimitados", "Lote de PDFs", "Suporte dedicado"],
  },
];

const PLAN_NAMES: Record<string, string> = {
  free: "Grátis",
  pro: "Pro",
  business: "Business",
};

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  active: { label: "Ativa", color: "text-[#22c55e]" },
  trialing: { label: "Em avaliação", color: "text-yellow-400" },
  past_due: { label: "Pagamento pendente", color: "text-red-400" },
  canceled: { label: "Cancelada", color: "text-[#7d7d85]" },
  free: { label: "Plano gratuito", color: "text-[#71717a]" },
};

export default function Assinatura() {
  const [sub, setSub] = useState<SubscriptionStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);
  const [portalLoading, setPortalLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/subscription/status", { cache: "no-store" });
        if (res.ok) setSub(await res.json());
      } catch {
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function startCheckout(plan: string) {
    setError("");
    setCheckoutLoading(plan);
    try {
      const res = await fetch("/api/subscription/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.detail || "Não foi possível iniciar o checkout.");
        return;
      }
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setCheckoutLoading(null);
    }
  }

  async function openPortal() {
    setError("");
    setPortalLoading(true);
    try {
      const res = await fetch("/api/subscription/portal", {
        method: "POST",
        headers: { "content-type": "application/json" },
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.detail || "Não foi possível abrir o portal.");
        return;
      }
      if (data.url) window.location.href = data.url;
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setPortalLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto space-y-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-32 rounded-2xl bg-[#f2f2f3] animate-pulse" />
        ))}
      </div>
    );
  }

  const statusInfo = sub ? STATUS_LABELS[sub.status] || STATUS_LABELS.free : STATUS_LABELS.free;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Assinatura</h1>
        <p className="text-sm text-[#71717a] mb-6">
          Gerencie seu plano e forma de pagamento.
        </p>
      </div>

      {/* Plano atual */}
      {sub && (
        <div className="rounded-2xl border border-[#e4e4e7] bg-[#ffffff] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-[#71717a]">Plano atual</p>
              <p className="text-2xl font-bold mt-0.5">
                {PLAN_NAMES[sub.plan] || sub.plan}
              </p>
            </div>
            <span className={`font-semibold text-sm ${statusInfo.color}`}>
              {statusInfo.label}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#71717a]">
            {sub.current_period_end && (
              <span>
                Renova em:{" "}
                {new Date(sub.current_period_end).toLocaleDateString("pt-BR")}
              </span>
            )}
            {sub.status !== "free" && (
              <button
                onClick={openPortal}
                disabled={portalLoading}
                className="text-[#22c55e] font-medium hover:underline disabled:opacity-50"
              >
                {portalLoading ? "Abrindo..." : "Gerenciar pagamento e cancelar →"}
              </button>
            )}
          </div>
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Cartões de planos */}
      <div className="grid md:grid-cols-2 gap-4">
        {PLANS.map((plan) => {
          const disabled =
            sub?.plan === plan.id && sub?.status === "active";
          return (
            <div
              key={plan.id}
              className={`rounded-2xl border p-6 flex flex-col ${
                sub?.plan === plan.id
                  ? "border-[#22c55e] bg-[#22c55e]/5"
                  : "border-[#e4e4e7] bg-[#ffffff]"
              }`}
            >
              <h3 className="font-semibold text-lg">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-sm text-[#71717a]">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-[#71717a]">{plan.desc}</p>
              <ul className="mt-4 space-y-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#71717a]">
                    <span className="text-[#22c55e]">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => startCheckout(plan.id)}
                disabled={disabled || checkoutLoading === plan.id}
                className={`mt-6 rounded-xl py-3 text-sm font-semibold transition-colors ${
                  disabled
                    ? "bg-[#22c55e]/10 text-[#22c55e] cursor-default"
                    : "bg-[#22c55e] text-black hover:bg-[#16a34a]"
                } disabled:opacity-60`}
              >
                {disabled
                  ? "Plano atual"
                  : checkoutLoading === plan.id
                  ? "Abrindo pagamento..."
                  : `Assinar ${plan.name}`}
              </button>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-[#7d7d85] text-center">
        Pagamento seguro via Stripe. Cartão de crédito com cobrança recorrente
        mensal ou PIX. Você pode cancelar a qualquer momento no portal de
        pagamento.
      </p>

      <div className="rounded-2xl border border-[#e4e4e7] bg-[#ffffff] p-4 text-center">
        <Link href="/" className="text-sm text-[#71717a] hover:text-black">
          ← Voltar para o início
        </Link>
      </div>
    </div>
  );
}