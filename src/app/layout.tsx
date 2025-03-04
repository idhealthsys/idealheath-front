import "./globals.css";
import type { Metadata } from "next";
import { poppins } from "../functions/fonts";
import LayoutWrapper from "@/components/Shared/LayoutWrapper";
import { generateFavicons } from "@/functions/generateFavicons";

export const metadata: Metadata = {
  icons: generateFavicons(),
  title:
    "A plataforma que transforma leads em clientes automaticamente - Ideal Health",
  description:
    "Domine a Gestão de Leads com Automação Inteligente para Facebook, Instagram e WhatsApp.",
  keywords: [
    "Ideal Health",
    "Gestão de Leads",
    "Automação Inteligente",
    "Facebook",
    "Instagram",
    "WhatsApp",
    "Atendimento personalizado",
    "Vendas",
    "Planos de saúde",
    "Ferramentas intuitivas",
    "Funil de vendas",
    "Taxa de conversão",
    "Campanhas",
    "Marketing",
    "Clientes satisfeitos",
    "Fidelização",
  ],
  openGraph: {
    images: [],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable}`}>
        <LayoutWrapper>{children}</LayoutWrapper>{" "}
        {/* O LayoutWrapper verifica se o pathname é igal a pagina de login ou dashboar para exibir ou nao os componentes header e footer. Ele é necessario ja que nao da pra fazer isso no arquivo layout que é renderizado apenas no servidor*/}
      </body>
    </html>
  );
}
