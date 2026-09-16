import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Como Baixar o XML da NF no Mercado Livre (Nota Fiscal de Venda)",
  description:
    "Aprenda onde encontrar e baixar o XML da Nota Fiscal (NF de venda) no Mercado Livre. PDF é só a impressão do DANFE — o XML é o documento fiscal oficial. Passo a passo direto.",
};

const STEPS = [
  {
    num: "1",
    title: "Entre no painel de vendas",
    desc: "No Mercado Livre (modo vendedor), acesse o menu Vendas, no topo da página.",
  },
  {
    num: "2",
    title: "Abra a aba de Notas fiscais",
    desc: "No menu lateral de Vendas, clique em Notas fiscais. É lá que ficam as NF de venda com o DANFE Simplificado.",
  },
  {
    num: "3",
    title: "Localize a venda e veja os detalhes",
    desc: "Encontre a nota do pedido desejado. Ao abrir os detalhes, você vê as opções de download do arquivo.",
  },
  {
    num: "4",
    title: "Baixe o XML (e o PDF do DANFE)",
    desc: "O Mercado Livre disponibiliza os dois arquivos: o XML (documento fiscal oficial) e o PDF do DANFE. Baixe o XML guardando no computador para imports e auditoria.",
  },
];

const FAQS = [
  {
    q: "O XML da NF no Mercado Livre existe?",
    a: "Sim. Toda NF de venda do Mercado Livre tem o XML oficial. O PDF que você imprime é o DANFE, que é apenas a representação visual desse XML — o XML é o documento fiscal verdadeiro.",
  },
  {
    q: "Não acho a opção de baixar o XML, o que faço?",
    a: "Vá em Vendas → Notas fiscais → abra os detalhes da nota e procure pelos botões de download. Se a opção do XML não aparecer, atualize a página ou aguarde a nota ser transmitida à SEFAZ (pode levar alguns minutos após a emissão).",
  },
  {
    q: "Posso converter o PDF do DANFE em XML?",
    a: "Não é recomendado. O XML é gerado na emissão da nota; o PDF é só a impressão dele. Converter um PDF de volta para XML daria um arquivo incompleto e sem valor fiscal. Sempre baixe o XML original direto do painel.",
  },
  {
    q: "Para que serve o XML da NF?",
    a: "Para importar a venda em sistemas (ERP), declarar impostos, integrar transportadoras e manter o documento oficial arquivado. O XML é o arquivo aceito legalmente para substituir o papel.",
  },
  {
    q: "Preciso do XML para imprimir a etiqueta + DANFE?",
    a: "Não. O DANFEpro unifica a etiqueta de envio com o DANFE (PDF) em uma única página, para impressão em térmica 10x15 ou A4. O XML você usa para fins fiscais — são coisas diferentes.",
  },
];

export default function ComoBaixarXmlMercadoLivrePage() {
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
          Guia · XML da NF no Mercado Livre
        </span>
        <h1 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Como baixar o <span className="text-gradient-accent">XML da NF</span> no
          Mercado Livre
        </h1>
        <p className="mt-6 text-lg text-[#71717a] leading-relaxed">
          A dúvida mais comum do vendedor: o PDF que a gente imprime (DANFE) não
          é o documento oficial — o <strong>XML</strong> é. Aqui mostramos onde o
          Mercado Livre guarda o XML da Nota Fiscal de venda e como baixar em 1
          minuto, direto pelo painel, sem instalar nada.
        </p>

        <div className="mt-10 rounded-2xl border border-[#22c55e]/40 bg-[#22c55e]/5 p-6 text-sm text-[#71717a] leading-relaxed">
          <strong className="text-black">Resumo rápido:</strong> no painel do
          vendedor, acesse <strong>Vendas → Notas fiscais</strong>, abra a nota e
          clique em baixar arquivo <strong>XML</strong>. O XML sempre acompanha a
          nota; o PDF (DANFE) é gerado a partir dele.
        </div>

        <h2 className="mt-12 text-2xl font-bold">Passo a passo</h2>
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
                <p className="mt-1 text-sm text-[#71717a] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold">XML ou DANFE: qual a diferença?</h2>
        <ul className="mt-6 space-y-3 text-[#71717a] text-sm">
          {[
            "XML: arquivo estruturado, é o documento fiscal oficial de verdade.",
            "DANFE (PDF): a impressão do XML — serve para o produto físico que segue no transporte.",
            "Para arquivar, importar em ERP ou declarar impostos, o que vale é o XML.",
            "Converter PDF em XML não é possível de forma confiável — o XML precisa ser o original.",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <span className="text-[#22c55e] mt-0.5">✓</span>
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-[#22c55e]/40 bg-[#22c55e]/5 p-8 text-center">
          <h2 className="text-2xl font-bold">Guarde o XML, imprima só o DANFE</h2>
          <p className="mt-2 text-[#71717a]">
            Na hora de despachar, unifique a etiqueta de envio com o DANFE em
            uma única página — térmica 10x15 ou A4, grátis para começar.
          </p>
          <Link
            href="/cadastro"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#22c55e] px-8 py-4 text-base font-semibold text-black hover:bg-[#16a34a] transition-colors"
          >
            Unificar etiqueta + DANFE grátis →
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