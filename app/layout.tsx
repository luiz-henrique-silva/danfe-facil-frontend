import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danfepro.com.br"),
  title: {
    default: "UniDANFE — Unificador de etiquetas e DANFE do e-commerce",
    template: "%s | UniDANFE",
  },
  description:
    "Unifique a etiqueta de envio e o DANFE Simplificado do e-commerce em uma única página. Imprima em térmica 100x150mm ou A4, direto no navegador.",
  keywords: [
    "unificador de etiquetas",
    "unificar etiquetas",
    "juntar etiquetas",
    "unir etiqueta e DANFE",
    "imprimir etiqueta e danfe junto",
    "imprimir uma etiqueta só",
    "uma página só etiqueta e danfe",
    "danfe simplificado e-commerce",
    "etiqueta mercado livre",
    "etiqueta mercadolivre",
    "etiqueta shoppee",
    "etiqueta shopee",
    "etiqueta de envio e-commerce",
    "etiqueta ml",
    "impressão térmica 100x150",
    "impressora térmica etiqueta danfe",
    "unir pdf etiqueta danfe",
    "combinar etiqueta e danfe",
    "danfe junto com etiqueta",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://danfepro.com.br",
    siteName: "UniDANFE",
    title: "UniDANFE — Unificador de etiquetas e DANFE do e-commerce",
    description:
      "Combine etiqueta de envio e DANFE Simplificado em uma única página, pronta para impressão em térmica ou A4.",
  },
  twitter: {
    card: "summary",
    title: "UniDANFE — etiqueta e DANFE em uma página só",
    description:
      "Combine etiqueta de envio e DANFE Simplificado em uma única página, pronta para impressão.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#ffffff] text-[#0a0a0a]">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}