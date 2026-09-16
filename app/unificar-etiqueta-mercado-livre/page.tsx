import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Unificar Etiqueta do Mercado Livre + DANFE em 1 Página",
  description:
    "Unifique a etiqueta de envio do Mercado Livre com o DANFE Simplificado em uma única página, pronta para impressão em térmica 100x150mm ou A4. Anti-erro: se falhar, não entra na sua cota.",
};

const STEPS = [
  {
    num: "1",
    title: "Baixe o PDF da etiqueta do Mercado Livre",
    desc: "Exporte a etiqueta de envio pelo painel de vendas do Mercado Livre, no formato PDF.",
  },
  {
    num: "2",
    title: "Envie no DANFEpro",
    desc: "Suba o arquivo pelo navegador, sem instalar nada. Escolha térmica 100x150mm, altura exata ou A4.",
  },
  {
    num: "3",
    title: "Imprima em uma página só",
    desc: "Baixamos a etiqueta + DANFE unificados em um único PDF, pronto para a sua impressora.",
  },
];

const FAQS = [
  {
    q: "Como unificar a etiqueta do Mercado Livre com o DANFE?",
    a: "Envie o PDF da etiqueta de envio do Mercado Livre no DANFEpro. O sistema combina a etiqueta com o DANFE Simplificado em uma única página, pronta para imprimir em térmica ou A4.",
  },
  {
    q: "Juntar etiqueta do Mercado Livre e DANFE em uma única impressão?",
    a: "Sim. O DANFEpro janta a etiqueta de envio 10x15 do Mercado Livre com o DANFE Simplificado em uma única etiqueta, sem precisar de dois cliques ou duas folhas.",
  },
  {
    q: "Funciona com o DANFE Simplificado do Mercado Livre?",
    a: "Sim. O DANFEpro foi feito justamente para unir a etiqueta de envio e o DANFE Simplificado emitidos pelo e-commerce em uma única folha.",
  },
  {
    q: "Unificar DANFE com etiqueta é o mesmo que juntar duas páginas?",
    a: "Sim. O DANFEpro unifica todas as páginas do DANFE com a etiqueta em uma única folha, tanto em formato 10x15 (térmica) quanto A4.",
  },
  {
    q: "Preciso instalar algum programa?",
    a: "Não. O processo é 100% online, direto no navegador, de qualquer computador.",
  },
  {
    q: "E se o processamento der erro?",
    a: "Processamentos com erro não entram na sua cota mensal e você não paga por eles. Garantia anti-erro incluída em todos os planos.",
  },
  {
    q: "Preciso do XML da NF para usar o DANFEpro?",
    a: "Não. O DANFEpro usa o PDF do DANFE junto com a etiqueta de envio. Se você procura o XML da Nota Fiscal, veja nosso guia de como baixar o XML da NF no Mercado Livre.",
  },
];

export default function UnificarEtiquetaMercadoLivrePage() {
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
          Etiqueta Mercado Livre + DANFE em uma página só
        </span>
        <h1 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Unificar Etiqueta do Mercado Livre com o{" "}
          <span className="text-gradient-accent">DANFE Simplificado</span>
        </h1>
        <p className="mt-6 text-lg text-[#71717a] leading-relaxed">
          O DANFEpro é o unificador de etiquetas que junta a etiqueta de envio
          do Mercado Livre e o DANFE Simplificado em uma única página. Você
          baixa um só PDF e economiza papel, tempo e dinheiro na impressão —
          em térmica 100x150mm ou A4.
        </p>

        <h2 className="mt-12 text-2xl font-bold">
          Unificar etiqueta do Mercado Livre + DANFE 10x15
        </h2>
        <p className="mt-4 text-[#71717a] leading-relaxed">
          A etiqueta de envio do Mercado Livre já sai no formato 10x15 (100x150mm),
          exatamente o tamanho da etiqueta térmica. O DANFEpro junta essa etiqueta
          com o DANFE nesse mesmo padrão, sem cortes. Se a sua impressora usa
          etiqueta 10x15, a impressão sai pronta para colar — duas páginas do
          DANFE, quando houver, também entram na mesma etiqueta.
        </p>
        <p className="mt-4 text-[#71717a] leading-relaxed">
          Resultado: em vez de imprimir e colar duas coisas separadas por envio,
          você imprime uma única etiqueta com tudo dentro, cortando o consumo de
          papel e etiqueta térmica pela metade.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Como funciona</h2>
        <div className="mt-6 grid gap-4">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="flex gap-4 rounded-2xl border border-[#e4e4e7] p-6"
            >
              <div className="w-10 h-10 shrink-0 rounded-xl border border-[#22c55e] bg-[#22c55e]/10 text-[#22c55e] font-bold flex items-center justify-center">
                {step.num}
              </div>
              <div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-[#71717a]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold">
          Por que unificar a etiqueta do Mercado Livre com o DANFE?
        </h2>
        <ul className="mt-6 space-y-3 text-[#71717a] text-sm">
          {[
            "Economize papel: uma única folha por envio, em vez de duas impressões separadas.",
            "Ganhe tempo no despacho: pronto para imprimir, direto da sua impressora térmica ou A4.",
            "Anti-erro: validação automática da chave de acesso, NF e Pack ID a cada processamento.",
            "Sem instalação: tudo no navegador, de qualquer computador.",
            "Histórico com data, hora e status de todas as impressões.",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <span className="text-[#22c55e] mt-0.5">✓</span>
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-[#22c55e]/40 bg-[#22c55e]/5 p-8 text-center">
          <h2 className="text-2xl font-bold">Comece grátis agora</h2>
          <p className="mt-2 text-[#71717a]">
            Crie sua conta e unifique sua primeira etiqueta do Mercado Livre em
            menos de um minuto.
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