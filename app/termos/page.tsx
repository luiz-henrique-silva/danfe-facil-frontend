import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso — UniDANFE",
  description: "Termos e condições de uso do serviço UniDANFE.",
};

const SECTIONS = [
  {
    title: "1. Aceitação dos termos",
    body: "Ao criar uma conta e utilizar o UniDANFE, você concorda com estes Termos de Uso. Se não concordar com qualquer parte deles, não utilize o serviço.",
  },
  {
    title: "2. O serviço",
    body: "O UniDANFE é um software como serviço (SaaS) que combina a etiqueta de envio e o DANFE Simplificado do e-commerce em uma única página PDF, otimizada para impressão térmica ou A4. O processamento é realizado automaticamente em nossos servidores.",
  },
  {
    title: "3. Conta e cadastro",
    body: "Você é responsável por manter a confidencialidade dos seus dados de acesso. O cadastro deve conter informações verdadeiras. Contas criadas com dados falsos ou de terceiros poderão ser suspensas.",
  },
  {
    title: "4. Planos e cobrança",
    body: "O serviço oferece um plano gratuito e planos pagos por assinatura mensal (Pro e Business). O pagamento é processado pela plataforma Stripe, com cartão de crédito em cobrança recorrente ou PIX. Ao assinar, você autoriza as cobranças periódicas até o cancelamento.",
  },
  {
    title: "5. Limite de uso",
    body: "Cada plano possui um limite mensal de processamentos. Ao atingir o limite, novos processamentos ficam indisponíveis até a renovação do ciclo ou o upgrade de plano. O uso em volume que caracterize abuso pode resultar em limitação ou suspensão.",
  },
  {
    title: "6. Cancelamento e reembolso",
    body: "Você pode cancelar a assinatura a qualquer momento pelo Painel do Cliente (Stripe Customer Portal). O cancelamento interrompe cobranças futuras; períodos já pagos não são reembolsados parcialmente, salvo determinação legal.",
  },
  {
    title: "7. Política de reembolso",
    body: "Como o serviço é digital e consumido por processamentos a cada uso, não são realizados reembolsos proporcionais de períodos pagos já utilizados. Problemas técnicos que impeçam o uso do serviço serão tratados caso a caso em até 7 dias úteis.",
  },
  {
    title: "8. Uso aceitável",
    body: "Você concorda em utilizar o serviço apenas com documentos de sua titularidade ou aos quais tenha autorização. É proibido o uso para fraudes, falsificações, envio de conteúdo ilegal ou qualquer violação da legislação brasileira.",
  },
  {
    title: "9. Propriedade intelectual",
    body: "O software, o design e o conteúdo do site são de propriedade do UniDANFE. O PDF resultante do processamento é seu; documentos fiscais continuam sendo de responsabilidade do emitente.",
  },
  {
    title: "10. Disponibilidade do serviço",
    body: "Buscamos máxima disponibilidade, mas o serviço pode sofrer interrupções temporárias para manutenção ou por causas fora do nosso controle. Não nos responsabilizamos por prejuízos decorrentes de indisponibilidade.",
  },
  {
    title: "11. Limitação de responsabilidade",
    body: "O UniDANFE é uma ferramenta de apoio à impressão. A conferência final dos dados fiscais é responsabilidade do usuário. Não nos responsabilizamos por multas, autuações ou perdas decorrentes de documentos fiscais inválidos ou de uso indevido.",
  },
  {
    title: "12. Alterações nos termos",
    body: "Estes termos podem ser atualizados a qualquer momento. Alterações relevantes serão comunicadas por email ou aviso no site. O uso continuado após a alteração implica aceitação dos novos termos.",
  },
  {
    title: "13. Foro",
    body: "Estas condições são regidas pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca do domicílio do usuário para dirimir quaisquer controvérsias, com renúncia a qualquer outro.",
  },
];

export default function TermosPage() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <h1 className="text-3xl font-bold mb-2">Termos de Uso</h1>
        <p className="text-sm text-[#7d7d85] mb-10">Última atualização: setembro de 2026</p>
        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
              <p className="text-[#71717a] leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}