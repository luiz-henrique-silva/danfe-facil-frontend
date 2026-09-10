import ProcessPdf from "@/components/dashboard/ProcessPdf";
import CheckoutBanner from "@/components/dashboard/CheckoutBanner";

export const metadata = {
  title: "Processar PDF — DANFE Fácil",
};

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Processar PDF</h1>
      <p className="text-sm text-[#a1a1a1] mb-6">
        Envie o PDF da etiqueta do Mercado Livre e receba o DANFE + etiqueta em
        uma única página.
      </p>
      <div className="mb-6">
        <CheckoutBanner />
      </div>
      <ProcessPdf />
    </div>
  );
}