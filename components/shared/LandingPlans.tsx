"use client";

import { useAuth } from "@/lib/auth-context";

const PLANS = [
  {
    name: "Grátis",
    price: "R$ 0",
    period: "para sempre",
    description: "Para testar e enviar poucos pacotes.",
    features: ["10 processamentos/mês", "Tamanho 100x150mm e A4", "Validação de integridade", "Suporte por email"],
    cta: "Começar grátis",
    href: "/cadastro",
    highlighted: false,
    trial: false,
  },
  {
    name: "Básico",
    price: "R$ 29,90",
    period: "/mês",
    description: "Para quem envia com frequência.",
    features: ["800 impressões/mês", "Lote de PDFs", "Térmica, auto e A4"],
    cta: "Assinar Básico",
    href: "/cadastro",
    highlighted: false,
    trial: false,
  },
  {
    name: "Pro",
    price: "R$ 49,90",
    originalPrice: "R$ 59,90",
    period: "/mês",
    description: "Para quem vende todo dia no e-commerce.",
    features: ["1.500 impressões/mês", "Lote de PDFs", "Térmica, auto e A4", "Suporte prioritário"],
    cta: "Assinar Pro",
    href: "/cadastro",
    highlighted: true,
    trial: false,
    badge: "Recomendado",
  },
  {
    name: "Business",
    price: "R$ 79,90",
    period: "/mês",
    description: "Para grandes volumes de envios.",
    features: ["Impressões ilimitadas", "Lote de PDFs", "Todas as configurações", "Suporte dedicado"],
    cta: "Assinar Business",
    href: "/cadastro",
    highlighted: false,
    trial: false,
  },
];

export default function LandingPlans() {
  const { user } = useAuth();

  if (user) return null;

  return (
    <section id="planos" className="px-6 py-24 bg-[#ffffff] border-y border-[#e4e4e7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22c55e]">
            Planos
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Comece grátis, escolha quando crescer
          </h2>
          <p className="mt-3 text-[#71717a]">
            Cartão de crédito com cobrança recorrente mensal ou PIX. Cancele
            quando quiser, em um clique.
          </p>
          <p className="mt-2 text-sm text-[#22c55e] font-medium">
            Anti-erro: se um processamento falhar, ele não entra na sua cota
            e você não paga por ele.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-4 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                plan.highlighted
                  ? "border-[#22c55e] bg-[#22c55e]/5 shadow-[0_0_40px_rgba(34,197,94,0.15)]"
                  : "border-[#e4e4e7] bg-[#ffffff] hover:border-[#c8c8cc]"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#22c55e] text-black text-xs font-bold">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-2">
                {plan.originalPrice && (
                  <span className="text-sm text-[#7d7d85] line-through">
                    {plan.originalPrice}
                  </span>
                )}
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-[#71717a]">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-[#71717a]">{plan.description}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#71717a]">
                    <span className="text-[#22c55e] mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className={`mt-8 inline-flex items-center justify-center rounded-xl py-3 px-4 text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-[#22c55e] text-black hover:bg-[#16a34a]"
                    : "bg-[#e8e8ea] text-black hover:bg-[#dcdcdf] border border-[#d4d4d8]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}