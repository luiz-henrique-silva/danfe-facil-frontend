import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-[#22c55e] flex items-center justify-center text-sm">
            📄
          </div>
          <span className="font-semibold">UniDANFE</span>
          <span className="text-sm text-[#666666]">© 2026 Todos os direitos reservados.</span>
        </div>
        <div className="flex gap-6 text-sm text-[#666666]">
          <Link href="/" className="hover:text-white transition-colors">
            Início
          </Link>
          <Link href="/termos" className="hover:text-white transition-colors">
            Termos de Uso
          </Link>
          <Link href="/privacidade" className="hover:text-white transition-colors">
            Privacidade
          </Link>
          <Link href="/login" className="hover:text-white transition-colors">
            Entrar
          </Link>
        </div>
      </div>
    </footer>
  );
}