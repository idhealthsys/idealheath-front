"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const caminhoAtual = usePathname();
  const mostrarCabecalhoRodape =
    caminhoAtual !== "/login" && caminhoAtual !== "/dashboard" && caminhoAtual !== '/compras-passos';

  return (
    <>
      {mostrarCabecalhoRodape && <Header />}
      {children}
      {mostrarCabecalhoRodape && <Footer />}
    </>
  );
}
