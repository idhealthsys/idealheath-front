import type { Metadata } from "next";
import { poppins } from "../functions/fonts";
import "./globals.css";
import Footer from "@/components/Shared/footer";
import Header from "@/components/Shared/header";

export const metadata: Metadata = {
  title:
    "A plataforma que transforma leads em clientes automaticamente - Ideal Health",
  description:
    "Domine a Gestão de Leads com Automação Inteligente para Facebook, Instagram e WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`animate-slideIn ${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
