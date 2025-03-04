"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="container">
        <span className="text-9xl">404</span>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Pagina não encontrada
        </h1>
        <p>
          A página que você esta procurando não existe. Você pode voltar para o
          inicio do site através desse link:{" "}
          <Link
            className="underline underline-offset-6 font-bold text-roxo-300"
            href={"/"}
          >
            {" "}
            Voltar para o início{" "}
          </Link>
        </p>
      </div>
    </main>
  );
}
