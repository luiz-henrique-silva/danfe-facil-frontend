import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { HeroCTA, BottomCTA } from "@/components/shared/LandingCTA";
import LandingPlans from "@/components/shared/LandingPlans";
import ImpactTable from "@/components/shared/ImpactTable";

export const metadata: Metadata = {
  title: "UniDANFE — Unificador de etiquetas e DANFE do e-commerce",
  description:
    "Combine a etiqueta de envio e o DANFE Simplificado do e-commerce em uma única página. Pronto para imprimir em térmica 100x150mm ou A4, direto no navegador.",
};

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Processamento em Lote",
    desc: "Junte várias etiquetas e DANFEs de uma vez e processe todos em segundos. Ideal para quem envia muitos pacotes por dia no Mercado Livre ou Shopee.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 6 2 18 2 18 9" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
    ),
    title: "Térmica e A4",
    desc: "Gere páginas em 100x150mm (térmica), altura exata do conteúdo ou A4. Escolha a que funciona para você.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 11.5 11 13.5 15 9.5" />
      </svg>
    ),
    title: "Anti-erro",
    desc: "Validação automática da chave de acesso, número da NF e Pack ID a cada processamento. Se algo falhar, não entra na sua cota e você não paga por isso.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    ),
    title: "Validação Automática",
    desc: "Chave de acesso, número da NF e Pack ID verificados após cada processamento para garantir integridade.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="2 12 6 12 6 8 10 8 10 12 14 12 14 16 18 16 18 20" />
      </svg>
    ),
    title: "Sem Instalação",
    desc: "100% no navegador. Acesse, envie o PDF, baixe o resultado. De qualquer computador, a qualquer hora.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Controle de Histórico",
    desc: "Acompanhe todos os processamentos com data, hora, arquivo, tamanho e status. Reconsulte os últimos 50 para conferência e rastreio.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
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
    desc: "Suba o PDF da etiqueta do e-commerce com drag & drop.",
  },
  {
    num: "3",
    title: "Baixe e imprima",
    desc: "O DANFE e a etiqueta combinados em uma página, prontos para imprimir.",
  },
];

const FAQS = [
  {
    q: "O que é o UniDANFE?",
    a: "É uma ferramenta web que combina a etiqueta de envio e o DANFE Simplificado do e-commerce em uma única página, pronta para impressão em térmica ou A4.",
  },
  {
    q: "Preciso instalar algo?",
    a: "Não. É 100% web. Basta criar uma conta, acessar pelo navegador e enviar seus PDFs.",
  },
  {
    q: "O sistema inventa dados fiscais?",
    a: "Não. Nós apenas reorganizamos o que já existe no PDF gerado pelo e-commerce. Nenhum dado fiscal é criado ou alterado.",
  },
  {
    q: "Como funciona a cobrança recorrente?",
    a: "Nos planos pagos você cadastra seu cartão de crédito ou paga via PIX. A fatura cai mensalmente no seu cartão de forma automática.",
  },
  {
    q: "Funciona com etiquetas do Mercado Livre?",
    a: "Sim. Envie o PDF da etiqueta do Mercado Livre e o UniDANFE une ela ao DANFE Simplificado em uma única página, pronta para impressão em térmica ou A4.",
  },
  {
    q: "Como imprimir duas páginas do DANFE em uma etiqueta só?",
    a: "O UniDANFE junta as duas páginas do DANFE — ou uma etiqueta e uma página de DANFE — em um único arquivo. Você imprime todas as folhas desnecessárias de uma vez na mesma etiqueta.",
  },
  {
    q: "Posso usar o DANFE em impressora térmica 100x150mm?",
    a: "Sim. O UniDANFE gera o DANFE ajustado para impressão térmica no formato 100x150mm (10x15), além de A4. É a configuração ideal para etiqueta de envio 10x15.",
  },
  {
    q: "Como economizar papel imprimindo etiquetas?",
    a: "Ao unificar etiqueta e DANFE em uma única página, você corta pela metade as impressões e o consumo de papel e etiquetas térmicas — economia direta em cada envio.",
  },
  {
    q: "O que é unificar etiqueta do Mercado Livre?",
    a: "É juntar a etiqueta de envio do Mercado Livre (formato 10x15) com o DANFE Simplificado em uma só página, evitando imprimir e colar duas folhas separadas por pedido.",
  },
  {
    q: "Funciona com etiquetas da Shopee?",
    a: "Sim. O UniDANFE combina etiquetas de envio de e-commerce em geral — incluindo Shopee — com o DANFE em uma só folha, sem instalação.",
  },
  {
    q: "Como juntar etiqueta e DANFE em uma única impressão?",
    a: "Subimos o PDF da etiqueta do e-commerce e o sistema une as duas em uma página só. Você baixa um único arquivo e imprime tudo de uma vez.",
  },
  {
    q: "Imprimo várias etiquetas em uma página?",
    a: "Sim. O sistema suporta imprimir etiqueta + DANFE juntos e também combinar múltiplos envios, otimizando sua impressora térmica ou folha A4.",
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

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "UniDANFE",
        url: "https://danfepro.com.br",
      },
      {
        "@type": "SoftwareApplication",
        name: "UniDANFE",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://danfepro.com.br",
        description:
          "Unificador de etiquetas e DANFE do e-commerce: combine etiqueta de envio e DANFE Simplificado em uma única página para imprimir em térmica 100x150mm ou A4.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "BRL",
          description: "Plano gratuito disponível",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            Unifique etiqueta e DANFE{" "}
            <span className="text-gradient-accent">em uma única folha</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[#71717a]">
            O UniDANFE é o unificador de etiquetas do e-commerce: une a
            etiqueta de envio (Mercado Livre, Shopee e outros) e o DANFE
            Simplificado em uma página só, direto no navegador. Pronto para
            imprimir em térmica 100x150mm ou A4.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <HeroCTA />
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
              Tudo que você precisa para vender no e-commerce
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

      {/* PLANOS (somente se nao estiver logado) */}
      <LandingPlans />

      {/* TABELA DE ECONOMIA */}
      <ImpactTable />

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

      {/* GUIA: JUNTAR ETIQUETA E DANFE */}
      <section className="px-6 py-10 bg-[#fafafa] border-b border-[#e4e4e7]">
        <div className="max-w-6xl mx-auto">
          <p className="font-semibold">Junta etiqueta + DANFE em uma página só</p>
          <p className="text-sm text-[#71717a] mt-1">
            Veja como unificar etiqueta do Mercado Livre com o DANFE 10x15, juntar duas páginas do DANFE em uma etiqueta térmica, e mais.
          </p>
          <div className="flex flex-wrap gap-3 text-sm mt-4">
            <Link
              href="/unificador-de-etiquetas"
              className="rounded-lg border border-[#d4d4d8] bg-white px-4 py-2 font-medium hover:border-[#22c55e] transition-colors"
            >
              Unificador de etiquetas
            </Link>
            <Link
              href="/unificar-etiqueta-mercado-livre"
              className="rounded-lg border border-[#d4d4d8] bg-white px-4 py-2 font-medium hover:border-[#22c55e] transition-colors"
            >
              Unificar etiqueta Mercado Livre + DANFE
            </Link>
            <Link
              href="/unificar-etiqueta-shopee"
              className="rounded-lg border border-[#d4d4d8] bg-white px-4 py-2 font-medium hover:border-[#22c55e] transition-colors"
            >
              Etiqueta Shopee + DANFE
            </Link>
            <Link
              href="/como-baixar-xml-nf-mercado-livre"
              className="rounded-lg border border-[#d4d4d8] bg-white px-4 py-2 font-medium hover:border-[#22c55e] transition-colors"
            >
              Baixar XML da NF no ML
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-24 text-center overflow-hidden">
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#22c55e]/10 blur-[100px] pointer-events-none" />
          <h2 className="relative text-3xl md:text-5xl font-extrabold tracking-tight">
            Comece a usar agora
          </h2>
          <p className="relative mt-4 text-lg text-[#71717a]">
            Crie sua conta gratuita e processe seu primeiro DANFE em menos de um
            minuto.
          </p>
          <BottomCTA />
        </div>
      </section>

      <Footer />
    </div>
  );
}