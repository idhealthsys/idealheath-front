import "./globals.css";
import type { Metadata } from "next";
import { poppins } from "../functions/fonts";
import LayoutWrapper from "@/components/Shared/LayoutWrapper";
import { generateFavicons } from "@/functions/generateFavicons";


export const metadata: Metadata = {
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
  icons: generateFavicons(),
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`animate-slideIn ${poppins.variable}`}>
        <LayoutWrapper>{children}</LayoutWrapper>{" "}
        {/* O LayoutWrapper verifica se o pathname é igal a pagina de login ou dashboar para exibir ou nao os componentes header e footer. Ele é necessario ja que nao da pra fazer isso no arquivo layout que é renderizado no servidor*/}
      </body>
    </html>
  );
}
