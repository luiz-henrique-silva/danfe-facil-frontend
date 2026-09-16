import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Unificar Etiqueta da Shopee + DANFE em 1 Página",
  description:
    "Unifique a etiqueta de envio da Shopee com o DANFE de e-commerce em uma única página, pronta para impressão em térmica 100x150mm ou A4. Garantia anti-erro.",
};

const FAQS = [
  {
    q: "Como unificar a etiqueta da Shopee com o DANFE?",
    a: "Envie o PDF da etiqueta de envio da Shopee no DANFEpro. O sistema combina a etiqueta com o DANFE em uma única página, pronta para imprimir em térmica ou A4.",
  },
  {
    q: "Consigo juntar várias etiquetas da Shopee em uma impressão?",
    a: "Sim. O DANFEpro suporta processamento em lote: envie vários PDFs e imprima etiqueta + DANFE juntos, otimizando sua impressora.",
  },
  {
    q: "Funciona com o DANFE para impressora térmica?",
    a: "Sim. O DANFEpro gera o resultado no formato 10x15 (100x150mm) para impressora térmica ou em A4 — basta escolher no upload do PDF.",
  },
  {
    q: "Como juntar duas páginas do DANFE em uma etiqueta?",
    a: "Envie o PDF com as duas páginas e o DANFEpro junta tudo — etiqueta + páginas do DANFE — em uma única etiqueta 10x15 ou folha A4.",
  },
  {
    q: "Preciso instalar algum programa?",
    a: "Não. O processo é 100% online, direto no navegador, de qualquer computador.",
  },
];

export default function UnificarEtiquetaShopeePage() {
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
          Etiqueta Shopee + DANFE em uma página só
        </span>
        <h1 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Unificar Etiqueta da Shopee com o{" "}
          <span className="text-gradient-accent">DANFE</span>
        </h1>
        <p className="mt-6 text-lg text-[#71717a] leading-relaxed">
          O DANFEpro junta a etiqueta de envio da Shopee e o DANFE de
          e-commerce em uma única página. Um só PDF, pronto para imprimir em
          térmica 100x150mm ou A4 — sem instalar nada.
        </p>

        <h2 className="mt-12 text-2xl font-bold">
          Juntar duas etiquetas em uma só impressão
        </h2>
        <p className="mt-4 text-[#71717a] leading-relaxed">
          Por envio você recebe pelo menos duas páginas: a etiqueta de envio e
          o DANFE. O DANFEpro imprime essas duas páginas em uma única etiqueta
          10x15 (térmica) ou em uma folha A4. Em vez de duas impressões por
          pedido, você processa tudo em uma — o que reduz o consumo de papel e
          etiqueta térmica pela metade no seu dia a dia.
        </p>

        <div className="mt-10 rounded-2xl border border-[#e4e4e7] p-6">
          <h2 className="text-lg font-semibold">
            Como unificar a etiqueta da Shopee
          </h2>
          <ol className="mt-4 space-y-3 list-decimal list-inside text-sm text-[#71717a]">
            <li>Baixe o PDF da etiqueta de envio no painel da sua loja Shopee.</li>
            <li>Suba o arquivo no DANFEpro pelo navegador.</li>
            <li>Baixe o PDF com etiqueta + DANFE unificados e imprima em uma página só.</li>
          </ol>
        </div>

        <div className="mt-10 rounded-2xl border border-[#22c55e]/40 bg-[#22c55e]/5 p-8 text-center">
          <h2 className="text-2xl font-bold">Unifique grátis agora</h2>
          <p className="mt-2 text-[#71717a]">
            Crie sua conta e unifique sua primeira etiqueta da Shopee em menos
            de um minuto.
          </p>
          <Link
            href="/cadastro"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#22c55e] px-8 py-4 text-base font-semibold text-black hover:bg-[#16a34a] transition-colors"
          >
            Unificar etiqueta grátis →
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