"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <motion.main
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="lg:my-80 my-60"
    >
      <div className="container">
        <span className="text-9xl">404</span>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Pagina não encontrada
        </h1>
        <p>
          A página que você esta procurando não existe. Você pode voltar para o
          inicio do site através desse link: <Link className="underline underline-offset-6 font-bold text-roxo-300" href={'/'}> Voltar para o início </Link>
        </p>
        
      </div>
    </motion.main>
  );
}
