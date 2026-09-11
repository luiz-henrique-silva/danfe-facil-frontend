import Link from "next/link";

const TRUST_ITEMS: { title: string; desc: string; icon: React.ReactNode }[] = [
  {
    title: "Anti-erro",
    desc: "Se falhar, não entra na sua cota e você não paga",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 11.5 11 13.5 15 9.5" />
      </svg>
    ),
  },
  {
    title: "Conexão segura SSL",
    desc: "Criptografia de ponta a ponta",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Pagamento seguro",
    desc: "Stripe — cartão em até 12x",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "LGPD & privacidade",
    desc: "Dados usados só no processamento",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
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
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Selos de confiança */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 border-b border-[#e4e4e7]">
          {TRUST_ITEMS.map((t) => (
            <div
              key={t.title}
              className="flex items-start gap-3 rounded-xl border border-[#e4e4e7] bg-[#fafafa] px-4 py-4"
            >
              <span className="text-[#22c55e] leading-none">{t.icon}</span>
              <div>
                <p className="text-sm font-semibold">{t.title}</p>
                <p className="text-xs text-[#7d7d85] mt-0.5">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-[#22c55e] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
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