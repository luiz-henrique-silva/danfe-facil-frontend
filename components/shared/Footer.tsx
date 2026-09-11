import Link from "next/link";

const TRUST_ITEMS = [
  {
    icon: "🔒",
    title: "Conexão segura SSL",
    desc: "Criptografia de ponta a ponta",
  },
  {
    icon: "💳",
    title: "Pagamento seguro",
    desc: "Stripe — cartão em até 12x",
  },
  {
    icon: "🪙",
    title: "PIX aprovado na hora",
    desc: "Cobra-se e ativa na hora",
  },
  {
    icon: "🛡️",
    title: "LGPD & privacidade",
    desc: "Dados usados só no processamento",
  },
];

const PAYMENT_BADGES = [
  { key: "visa", label: "Visa" },
  { key: "master", label: "Mastercard" },
  { key: "pix", label: "PIX" },
  { key: "stripe", label: "Stripe" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e4e4e7] py-10 mt-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Selos de confiança */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 border-b border-[#e4e4e7]">
          {TRUST_ITEMS.map((t) => (
            <div
              key={t.title}
              className="flex items-start gap-3 rounded-xl border border-[#e4e4e7] bg-[#fafafa] px-4 py-4"
            >
              <span className="text-2xl leading-none">{t.icon}</span>
              <div>
                <p className="text-sm font-semibold">{t.title}</p>
                <p className="text-xs text-[#7d7d85] mt-0.5">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-[#22c55e] flex items-center justify-center text-sm">
              📄
            </div>
            <span className="font-semibold">UniDANFE</span>
            <span className="text-sm text-[#7d7d85]">
              © 2026 Todos os direitos reservados.
            </span>
          </div>

          <div className="flex items-center gap-3">
            {PAYMENT_BADGES.map((b) => (
              <span
                key={b.key}
                className="inline-flex items-center rounded border border-[#e4e4e7] bg-[#ffffff] px-3 py-1 text-xs font-semibold text-[#52525b]"
              >
                {b.label}
              </span>
            ))}
          </div>

          <div className="flex gap-6 text-sm text-[#7d7d85]">
            <Link href="/" className="hover:text-black transition-colors">
              Início
            </Link>
            <Link href="/termos" className="hover:text-black transition-colors">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="hover:text-black transition-colors">
              Privacidade
            </Link>
            <Link href="/login" className="hover:text-black transition-colors">
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}