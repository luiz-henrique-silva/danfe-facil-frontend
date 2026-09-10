import DashboardShell from "@/components/dashboard/DashboardShell";

export const metadata = {
  title: "Dashboard — DANFE Fácil",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}