import Link from "next/link";

export default function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] relative overflow-hidden">
      <div className="absolute top-[-250px] right-[-200px] w-[500px] h-[500px] rounded-full bg-[#22c55e]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-250px] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#22c55e]/8 blur-[120px] pointer-events-none" />

      <header className="relative z-10 px-6 py-6">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-[#22c55e] flex items-center justify-center text-lg">
            📄
          </div>
          <span className="font-bold text-lg">UniDANFE</span>
        </Link>
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center px-6 pb-16">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-[#e4e4e7] bg-[#ffffff] p-8">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="mt-1.5 mb-7 text-sm text-[#71717a]">{subtitle}</p>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}