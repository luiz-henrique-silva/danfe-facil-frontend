import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade — UniDANFE",
  description: "Como o UniDANFE coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
};

const SECTIONS = [
  {
    title: "1. Dados coletados",
    body: "Coletamos os dados necessários ao funcionamento do serviço: nome, email, hash de senha segura, e os arquivos PDF enviados para processamento. Dados de pagamento (cartão etc.) são processados exclusivamente pela Stripe e não são armazenados por nós.",
  },
  {
    title: "2. Finalidade do uso",
    body: "Seus dados são usados para: criar e gerenciar sua conta, processar seus PDFs, cobrar a assinatura via Stripe, enviar comunicados importantes (ex.: recuperação de senha) e melhorar o serviço.",
  },
  {
    title: "3. Base legal",
    body: "Tratamos seus dados com base na LGPD (Lei 13.709/2018): execução do contrato de prestação do serviço (art. 7º, V), cumprimento de obrigações legais e legítimo interesse.",
  },
  {
    title: "4. PDFs enviados",
    body: "Os PDFs são usados exclusivamente para gerar o resultado do processamento e são removidos dos nossos servidores em até 24 horas após a conclusão. Não os compartilhamos com terceiros, exceto por obrigação legal.",
  },
  {
    title: "5. Compartilhamento",
    body: "Compartilhamos dados apenas com parceiros indispensáveis ao serviço: a Stripe (pagamentos, dados mínimos de identificação e cobrança) e provedores de infraestrutura de nuvem e email. Nenhum dado é vendido.",
  },
  {
    title: "6. Cookies e sessão",
    body: "Utilizamos cookies httpOnly necessários à autenticação (tokens de sessão). Não utilizamos cookies de rastreamento ou publicidade de terceiros.",
  },
  {
    title: "7. Retenção",
    body: "Seus dados de conta permanecem enquanto a conta estiver ativa. Ao solicitar exclusão, os dados são removidos em até 30 dias, exceto os que a lei exige que retenhamos (ex.: registros fiscais e de pagamento).",
  },
  {
    title: "8. Seus direitos (LGPD)",
    body: "Você pode solicitar a qualquer momento: acesso, correção, portabilidade, anonimização e exclusão dos seus dados, além de revogar consentimentos. Basta entrar em contato pelo email indicado no rodapé.",
  },
  {
    title: "9. Segurança",
    body: "Adotamos medidas técnicas e organizacionais para proteger seus dados: senhas com hash bcrypt, tokens JWT de curta duração em cookies httpOnly, TLS em todas as conexões e acesso restrito aos servidores.",
  },
  {
    title: "10. Dados de menores",
    body: "O serviço é destinado a maiores de 18 anos. Não coletamos intencionalmente dados de menores de idade.",
  },
  {
    title: "11. Alterações desta política",
    body: "Esta política pode ser atualizada periodicamente. Alterações relevantes serão comunicadas por email ou aviso no site, e a data de última atualização será revisada.",
  },
  {
    title: "12. Contato",
    body: "Para exercer seus direitos ou tirar dúvidas sobre o tratamento de dados, fale conosco pelo email danfeoficialpro@gmail.com. Atendemos em até 48 horas úteis.",
  },
];

export default function PrivacidadePage() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <h1 className="text-3xl font-bold mb-2">Política de Privacidade</h1>
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