import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Unificador de Etiquetas — Junte Etiqueta e DANFE em 1 Página",
  description:
    "O unificador de etiquetas do e-commerce: combine etiqueta de envio (Mercado Livre, Shopee e outros) e DANFE em uma única página, pronta para térmica 100x150mm ou A4. Grátis para começar.",
};

const FAQS = [
  {
    q: "O que é um unificador de etiquetas?",
    a: "É uma ferramenta que junta a etiqueta de envio do e-commerce com o DANFE em uma única página, pronta para impressão em térmica 100x150mm ou A4.",
  },
  {
    q: "Como juntar duas etiquetas em uma?",
    a: "Envie os PDFs das etiquetas no UniDANFE. O sistema unifica duas (ou mais) etiquetas de envio e também as páginas do DANFE em uma única folha, seja etiqueta térmica 10x15 ou A4.",
  },
  {
    q: "Como imprimir duas páginas em uma etiqueta?",
    a: "Quando o DANFE ocupa duas páginas, ou você tem etiqueta + DANFE, o UniDANFE compacta tudo e imprime as duas páginas em uma única etiqueta 10x15 ou folha A4.",
  },
  {
    q: "Consigo imprimir o DANFE para impressora térmica?",
    a: "Sim. O UniDANFE gera o DANFE no tamanho da sua impressora térmica — formato etiqueta 10x15 (100x150mm) — ou em A4, conforme sua escolha.",
  },
  {
    q: "Como economizar papel imprimindo etiquetas?",
    a: "Unificando etiqueta + DANFE em uma única impressão, cada envio consome uma etiqueta em vez de duas. Quem imprime etiquetas todos os dias reduz o consumo de papel e etiqueta térmica pela metade.",
  },
  {
    q: "Quais e-commerces são compatíveis?",
    a: "O UniDANFE combina etiquetas de Mercado Livre, Shopee e outros e-commerces que geram a etiqueta em PDF, sempre respeitando o DANFE emitido pelo próprio e-commerce.",
  },
  {
    q: "Cobram se der erro no processamento?",
    a: "Não. Processamentos com erro não entram na sua cota mensal e você não paga por eles. Garantia anti-erro em todos os planos.",
  },
  {
    q: "Preciso instalar algo?",
    a: "Não. Tudo é online, direto no navegador, sem instalação.",
  },
];

export default function UnificadorDeEtiquetasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="flex flex-col flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-6 py-16 w-full">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e4e4e7] bg-[#ffffff] text-sm text-[#22c55e] font-medium">
          Unificador de etiquetas online
        </span>
        <h1 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Unificador de Etiquetas:{" "}
          <span className="text-gradient-accent">etiqueta + DANFE em 1 página</span>
        </h1>
        <p className="mt-6 text-lg text-[#71717a] leading-relaxed">
          O UniDANFE é a ferramenta que junta a etiqueta de envio do seu
          e-commerce com o DANFE em uma única página. Imprima em térmica
          100x150mm ou A4, economize papel e agilize o despacho — tudo direto
          no navegador, sem instalação.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Para quais e-commerces serve?</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: "Mercado Livre",
              desc: "Etiqueta de envio + DANFE Simplificado em uma página.",
              href: "/unificar-etiqueta-mercado-livre",
            },
            {
              title: "Shopee",
              desc: "Etiqueta de envio + DANFE unificados para impressão.",
              href: "/unificar-etiqueta-shopee",
            },
            {
              title: "Outros e-commerces",
              desc: "Se a etiqueta sai em PDF, o UniDANFE une ao DANFE.",
              href: "/",
            },
          ].map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="rounded-2xl border border-[#e4e4e7] p-5 hover:border-[#22c55e] transition-colors"
            >
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-[#71717a] leading-relaxed">{c.desc}</p>
            </Link>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold">Juntar duas etiquetas em uma: como funciona?</h2>
        <p className="mt-4 text-[#71717a] leading-relaxed">
          O termo mais comum é "juntar duas páginas em uma": no envio, são duas
          folhas por pedido — a etiqueta de envio e uma ou duas páginas do
          DANFE. O UniDANFE unifica tudo e imprime essas folhas em uma única
          etiqueta (10x15 térmica) ou uma folha A4. Cada envio passa a gastar
          uma impressão em vez de duas, e assim você economiza papel imprimindo
          etiquetas todos os dias.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Por que usar um unificador de etiquetas?</h2>
        <ul className="mt-6 space-y-3 text-[#71717a] text-sm">
          {[
            "Uma folha por envio: etiqueta e DANFE juntos, sem impressão dupla.",
            "Compatível com impressora térmica 100x150mm e A4.",
            "Processamento em lote para quem envia muitos pacotes por dia.",
            "Anti-erro: falhas não entram na cota e você não paga por elas.",
            "Histórico com data, hora, arquivo e status de cada impressão.",
            "Comece grátis, sem cartão de crédito, e faça upgrade quando precisar.",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <span className="text-[#22c55e] mt-0.5">✓</span>
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-[#22c55e]/40 bg-[#22c55e]/5 p-8 text-center">
          <h2 className="text-2xl font-bold">Junte sua primeira etiqueta agora</h2>
          <p className="mt-2 text-[#71717a]">
            Crie uma conta grátis e unifique etiqueta + DANFE em menos de um
            minuto.
          </p>
          <Link
            href="/cadastro"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#22c55e] px-8 py-4 text-base font-semibold text-black hover:bg-[#16a34a] transition-colors"
          >
            Criar conta grátis →
          </Link>
        </div>

        <h2 className="mt-12 text-2xl font-bold">Perguntas Frequentes</h2>
        <div className="mt-6 space-y-3">
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
      </main>
      <Footer />
    </div>
  );
}