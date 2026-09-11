import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UniDANFE — Impressão Inteligente para Mercado Livre",
  description:
    "Combine a etiqueta de envio e o DANFE Simplificado do Mercado Livre em uma única página. Pronto para imprimir em térmica ou A4, direto no navegador.",
};

const FEATURES = [
  {
    icon: "📦",
    title: "Processamento em Lote",
    desc: "Submeta vários PDFs de uma vez e processe todos em segundos. Ideal para quem envia muitos pacotes por dia.",
  },
  {
    icon: "🖨️",
    title: "Térmica e A4",
    desc: "Gere páginas em 100x150mm (térmica), altura exata do conteúdo ou A4. Escolha a que funciona para você.",
  },
  {
    icon: "🔒",
    title: "Seguro e Confiável",
    desc: "Seus PDFs são processados com composição vetorial — textos continuam textos, QR codes mantêm resolução.",
  },
  {
    icon: "✅",
    title: "Validação Automática",
    desc: "A chave de acesso, número da NF e Pack ID são validados após cada processamento para garantir integridade.",
  },
  {
    icon: "⚡",
    title: "Direto no Navegador",
    desc: "Sem instalação. Acesse, envie o PDF, baixe o resultado. De qualquer computador, a qualquer hora.",
  },
  {
    icon: "💳",
    title: "Planos Simples",
    desc: "Comece grátis e faça upgrade quando precisar. Cartão de crédito com recorrência mensal ou PIX.",
  },
];

const STEPS = [
  {
    num: "1",
    title: "Crie sua conta",
    desc: "Cadastre-se gratuitamente e faça login. Sem instalação, tudo no navegador.",
  },
  {
    num: "2",
    title: "Envie o PDF",
    desc: "Suba o PDF da etiqueta do Mercado Livre com drag & drop.",
  },
  {
    num: "3",
    title: "Baixe e imprima",
    desc: "O DANFE e a etiqueta combinados em uma página, prontos para imprimir.",
  },
];

const PLANS = [
  {
    name: "Grátis",
    price: "R$ 0",
    period: "para sempre",
    description: "Para testar e enviar poucos pacotes.",
    features: ["10 processamentos/mês", "Tamanho 100x150mm e A4", "Validação de integridade", "Suporte por email"],
    cta: "Começar grátis",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "R$ 29",
    period: "/mês",
    description: "Para quem vende todo dia no Mercado Livre.",
    features: ["500 processamentos/mês", "Lote de PDFs", "Térmica, auto e A4", "Cartão de crédito recorrente ou PIX", "Suporte prioritário"],
    cta: "Assinar Pro",
    highlighted: true,
  },
  {
    name: "Business",
    price: "R$ 79",
    period: "/mês",
    description: "Para grandes volumes de envios.",
    features: ["Processamentos ilimitados", "Lote de PDFs", "Todas as configurações de página", "Suporte dedicado", "Cartão recorrente ou PIX"],
    cta: "Assinar Business",
    highlighted: false,
  },
];

const FAQS = [
  {
    q: "O que é o UniDANFE?",
    a: "É uma ferramenta web que combina a etiqueta de envio e o DANFE Simplificado do Mercado Livre em uma única página, pronta para impressão em térmica ou A4.",
  },
  {
    q: "Preciso instalar algo?",
    a: "Não. É 100% web. Basta criar uma conta, acessar pelo navegador e enviar seus PDFs.",
  },
  {
    q: "O sistema inventa dados fiscais?",
    a: "Não. Nós apenas reorganizamos o que já existe no PDF gerado pelo Mercado Livre. Nenhum dado fiscal é criado ou alterado.",
  },
  {
    q: "Como funciona a cobrança recorrente?",
    a: "Nos planos pagos você cadastra seu cartão de crédito ou paga via PIX. A fatura cai mensalmente no seu cartão de forma automática.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Você cancela em um clique na área de assinatura, direto no portal de pagamento, sem burocracia.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "Sim. Os arquivos são processados de forma segura e os dados tenham validade apenas durante o processamento. Sem compartilhamento indevido.",
  },
];

function PlanCard({ plan }: { plan: (typeof PLANS)[number] }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
        plan.highlighted
          ? "border-[#22c55e] bg-[#22c55e]/5 shadow-[0_0_40px_rgba(34,197,94,0.15)]"
          : "border-[#e4e4e7] bg-[#ffffff] hover:border-[#c8c8cc]"
      }`}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#22c55e] text-black text-xs font-bold">
          MAIS POPULAR
        </span>
      )}
      <h3 className="text-lg font-semibold">{plan.name}</h3>
      <div className="mt-3 flex items-baseline gap-1">
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
      <Link
        href="/cadastro"
        className={`mt-8 inline-flex items-center justify-center rounded-xl py-3 px-4 text-sm font-semibold transition-all ${
          plan.highlighted
            ? "bg-[#22c55e] text-black hover:bg-[#16a34a]"
            : "bg-[#e8e8ea] text-black hover:bg-[#dcdcdf] border border-[#d4d4d8]"
        }`}
      >
        {plan.cta}
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#22c55e]/10 blur-[120px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e4e4e7] bg-[#ffffff] text-sm text-[#71717a]">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            100% online — sem instalação
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Imprima DANFE e etiqueta{" "}
            <span className="text-gradient-accent">em uma única folha</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[#71717a]">
            O UniDANFE une a etiqueta de envio e o DANFE Simplificado do
            Mercado Livre em uma página só, direto no navegador. Pronto para
            imprimir em térmica ou A4.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/cadastro"
              className="inline-flex items-center gap-2 rounded-xl bg-[#22c55e] px-8 py-4 text-base font-semibold text-black hover:bg-[#16a34a] transition-colors"
            >
              Criar conta grátis →
            </Link>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 rounded-xl border border-[#d4d4d8] bg-[#ffffff] px-8 py-4 text-base font-medium text-black hover:bg-[#e8e8ea] transition-colors"
            >
              Como funciona
            </a>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto border-t border-[#e4e4e7] pt-8">
            {[
              { num: "100%", label: "Online" },
              { num: "0", label: "Instalações" },
              { num: "1", label: "Clique para enviar" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-[#22c55e]">{s.num}</div>
                <div className="text-sm text-[#7d7d85]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="px-6 py-24 bg-[#ffffff] border-y border-[#e4e4e7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22c55e]">
              Simples assim
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Como funciona</h2>
            <p className="mt-3 text-[#71717a]">
              Três passos e seu pedido está pronto para imprimir.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl border border-[#e4e4e7] bg-[#ffffff] p-8 text-center hover:border-[#22c55e] transition-colors"
              >
                <div className="mx-auto w-12 h-12 rounded-xl border border-[#22c55e] bg-[#22c55e]/10 text-[#22c55e] font-bold flex items-center justify-center">
                  {step.num}
                </div>
                <h3 className="mt-5 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-[#71717a]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section id="funcionalidades" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22c55e]">
              Funcionalidades
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              Tudo que você precisa para vender no Mercado Livre
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#e4e4e7] bg-[#ffffff] p-7 hover:border-[#c8c8cc] hover:bg-[#f2f2f3] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#22c55e]/10 flex items-center justify-center text-2xl">
                  {f.icon}
                </div>
                <h3 className="mt-5 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-[#71717a] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
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
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6 items-stretch">
            {PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22c55e]">
              FAQ
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Perguntas Frequentes</h2>
          </div>
          <div className="mt-12 space-y-3">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-[#e4e4e7] bg-[#ffffff] px-6 py-4"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-medium">
                  {f.q}
                  <span className="text-[#22c55e] transition-transform group-open:rotate-45 text-xl">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-[#71717a] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#22c55e]/10 blur-[100px] pointer-events-none" />
          <h2 className="relative text-3xl md:text-5xl font-extrabold tracking-tight">
            Comece a usar agora
          </h2>
          <p className="relative mt-4 text-lg text-[#71717a]">
            Crie sua conta gratuita e processe seu primeiro DANFE em menos de um
            minuto.
          </p>
          <Link
            href="/cadastro"
            className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-[#22c55e] px-10 py-4 text-base font-semibold text-black hover:bg-[#16a34a] transition-colors"
          >
            Criar conta grátis →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}