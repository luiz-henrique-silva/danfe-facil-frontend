import ProcessPdf from "@/components/dashboard/ProcessPdf";
import CheckoutBanner from "@/components/dashboard/CheckoutBanner";
import ModeSelector from "@/components/dashboard/ModeSelector";

export const metadata = {
  title: "Dashboard | DANFEpro",
};

export default function DashboardPage() {
  return (
    <div>
      <ModeSelector />
      <div className="mb-6">
        <CheckoutBanner />
      </div>
    </div>
  );
}