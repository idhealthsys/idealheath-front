"use client";
import Head from "@/components/Shared/Head";
import { planos } from "./planos";
import PlanoCard from "./planoCard";
import PlanoInfo from "./planoInfo";
import React from "react";
import Image from "next/image";
import planPicture from "../../../public/planPicture.svg";

export default function Planos() {
  const [plano, setPlano] = React.useState(1);

  const exibirPlano = (index: number) => {
    setPlano(index);
  };

  return (
    <>
      <Head
        title="Ideal Health - Compras"
        description="Aproveite nossos serviços e produtos que irão acelerar o seu negócio."
      />
      <main className="container animeLeft">
        <div>
          <span className="block mt-16 text-gray-500">
            Explore nosso catálogo
          </span>
          <h1 className="text-4xl font-bold lg:text-5xl mb-4">
            Conheça nossos produtos
          </h1>
          <p className="mb-16 text-lg text-gray-500 text-balance">
            Precisando de uma solução completa para gerenciar seus dados e gerar
            relatórios personalizados? Nossos planos são flexíveis e se adaptam
            ao tamanho da sua equipe. Escolha o plano que melhor atende às suas
            necessidades e comece a economizar tempo e recursos.
          </p>
        </div>

        <section className="container grid lg:grid-cols-2 gap-6 lg:gap-28 lg:items-start justify-center flex-wrap max-md:flex-col-reverse mb-28">
          <div className="animate-slideIn flex-col items-center md:items-start md:flex-row gap-5 lg:mb-10 lg:border-r lg:pr-28">
            <PlanoCard
              className={`${
                plano === 0 ? "bg-roxo-400 *:text-white" : ""
              } hover:border-roxo-300 hover:shadow-[0_0_0_4px_#4351B0] transition-all`}
              onClick={() => exibirPlano(0)}
              name={planos[0].name}
              subtitle={planos[0].subtitle}
              price={planos[0].price}
            />
            <PlanoCard
              className={`${
                plano === 1 ? "bg-roxo-400 *:text-white" : ""
              } hover:border-roxo-300 hover:shadow-[0_0_0_4px_#4351B0] transition-all`}
              onClick={() => exibirPlano(1)}
              name={planos[1].name}
              subtitle={planos[1].subtitle}
              price={planos[1].price}
            />
            <PlanoCard
              className={`${
                plano === 2 ? "bg-roxo-400 *:text-white" : ""
              } hover:border-roxo-300 hover:shadow-[0_0_0_4px_#4351B0] transition-all`}
              onClick={() => exibirPlano(2)}
              name={planos[2].name}
              subtitle={planos[2].subtitle}
              price={planos[2].price}
            />
          </div>
          <div className="relative">
            <PlanoInfo
              className={`${plano === 0 ? "block" : "hidden"} animeLeft`}
              name={planos[0].name}
              description={planos[0].description}
              features={planos[0].features}
            />
            <PlanoInfo
              className={`${plano === 1 ? "block" : "hidden"} animeLeft`}
              name={planos[1].name}
              description={planos[1].description}
              features={planos[1].features}
            />
            <PlanoInfo
              className={`${plano === 2 ? "block" : "hidden"} animeLeft`}
              name={planos[2].name}
              description={planos[2].description}
              features={planos[2].features}
            />
            <Image
              src={planPicture}
              alt="picture"
              className="opacity-50 absolute bottom-0 right-0 min-lg:right-40"
            />
          </div>
        </section>
      </main>
    </>
  );
}
