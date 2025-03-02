"use client";
import {
  IconBuildingStore,
  IconCirclesRelation,
  IconFlag,
  IconHistory,
  IconMathSymbols,
  IconMessage,
  IconRocket,
  IconUserEdit,
  IconUserScan,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import React from "react";

export default function Solucoes() {
  const [solucao, setSolucao] = React.useState(1);

  const exibirSolucao = (index: number) => {
    setSolucao(index);
  };

  return (
    <section className="container flex flex-col lg:flex-row lg:gap-28 gap-10 items-center justify-center py-28">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={`${solucao === 1 ? "block" : "hidden"} animate-slideIn`}
      >
        <h1 className="lg:text-5xl text-4xl font-bold mb-5 text-balance">
          Invista nas melhores ferramentas e impulsione seu negócio!
        </h1>
        <p className="text-stone-500 text-lg text-balance">
          Tenha acesso às ferramentas mais modernas e eficazes do mercado para
          impulsionar seu negócio. Nossa plataforma oferece tudo o que você
          precisa para alcançar seus objetivos.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={`${solucao === 2 ? "block" : "hidden"} animate-slideIn`}
      >
        <h1 className="lg:text-5xl text-4xl font-bold mb-5 text-balance">
          Atendimento personalizado e ágil para aumentar suas vendas!
        </h1>
        <p className={`text-stone-500 text-lg text-balance`}>
          Ofereça um atendimento rápido e personalizado aos seus leads,
          qualificando-os de forma eficiente e aumentando as chances de
          conversão. Nossa plataforma te ajuda a identificar as necessidades de
          cada cliente e direcioná-lo para a melhor solução.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={`${solucao === 3 ? "block" : "hidden"} animate-slideIn`}
      >
        <h1 className="lg:text-5xl text-4xl font-bold mb-5 text-balance">
          Fale com seus clientes onde eles estão: no WhatsApp!
        </h1>
        <p className={`text-stone-500 text-lg text-balance`}>
          Agilize o processo de venda e fidelize seus clientes entregando os
          leads qualificados diretamente no WhatsApp. Com nossa ferramenta, você
          pode iniciar conversas personalizadas e fechar negócios mais
          rapidamente.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={`${solucao === 4 ? "block" : "hidden"} animate-slideIn`}
      >
        <h1 className="lg:text-5xl text-4xl font-bold mb-5 text-balance">
          Simplifique a gestão do seu negócio com nossa plataforma intuitiva!
        </h1>
        <p className={`text-stone-500 text-lg text-balance`}>
          Diga adeus às planilhas e aos processos manuais. Nossa plataforma
          oferece ferramentas intuitivas e fáceis de usar, permitindo que você
          gerencie seus negócios de forma eficiente e organizada.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={`${solucao === 5 ? "block" : "hidden"} animate-slideIn`}
      >
        <h1 className="lg:text-5xl text-4xl font-bold mb-5 text-balance">
          Aumente suas vendas e alcance seus objetivos!
        </h1>
        <p className={`text-stone-500 text-lg text-balance`}>
          Com nossas ferramentas, você terá uma maior taxa de conversão de leads
          em vendas. Ofereça um atendimento personalizado, qualifique seus leads
          de forma eficiente e feche mais negócios.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={`${solucao === 6 ? "block" : "hidden"} animate-slideIn`}
      >
        <h1 className="lg:text-5xl text-4xl font-bold mb-5 text-balance">
          Unifique seus leads e acelere suas vendas!
        </h1>
        <p className={`text-stone-500 text-lg text-balance`}>
          Cansado de perder leads e ter informações dispersas? Com nossa
          plataforma, você centraliza todos os dados dos seus clientes em um
          único lugar, facilitando o acompanhamento e a gestão do seu funil de
          vendas. Integramos leads de diversas fontes, garantindo que nenhuma
          oportunidade seja perdida.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={`${solucao === 7 ? "block" : "hidden "} animate-slideIn`}
      >
        <h1 className="lg:text-5xl text-4xl font-bold mb-5 text-balance">
          Dedique mais tempo ao que realmente importa: suas vendas!
        </h1>
        <p className={`text-stone-500 text-lg text-balance`}>
          Automatize as tarefas repetitivas e concentre-se em fechar negócios.
          Nossa plataforma te libera do trabalho operacional, permitindo que
          você se dedique a construir relacionamentos duradouros com seus
          clientes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={`${solucao === 8 ? "block" : "hidden"} animate-slideIn`}
      >
        <h1 className="lg:text-5xl text-4xl font-bold mb-5 text-balance">
          Clientes satisfeitos são a melhor propaganda!
        </h1>
        <p className={`text-stone-500 text-lg text-balance`}>
          Ofereça um atendimento rápido e personalizado aos seus clientes,
          superando suas expectativas. Com nossa plataforma, você construirá
          relacionamentos duradouros e fidelizará seus clientes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={`${solucao === 9 ? "block" : "hidden"} animate-slideIn`}
      >
        <h1 className="lg:text-5xl text-4xl font-bold mb-5 text-balance">
          Simulador de Planos de Saúde
        </h1>
        <p className={`text-stone-500 text-lg text-balance`}>
          Com nosso simulador de planos de saúde, você pode oferecer aos seus
          clientes as melhores opções de acordo com suas necessidades. Utilize
          as informações mais atualizadas do mercado e surpreenda seus clientes
          com um atendimento personalizado.
        </p>
      </motion.div>

      {/* futuramente, fazer um tabnav com prints do dashborad */}
      <div className=" grid grid-cols-[repeat(3,80px)] grid-rows-[repeat(3,80px)] gap-5">
        <button
          onClick={() => exibirSolucao(1)}
          className={`${
            solucao === 1 ? "shadow-[0_0_0_4px_#2D3674]" : ""
          } border flex items-center justify-center rounded-md transition cursor-pointer `}
        >
          ⠀<IconBuildingStore size={32} color="#333" />⠀
        </button>
        <button
          onClick={() => exibirSolucao(2)}
          className={`${
            solucao === 2 ? "shadow-[0_0_0_4px_#2D3674]" : ""
          } border flex items-center justify-center rounded-md transition cursor-pointer bg-[#b8e4ff]`}
        >
          ⠀
          <IconUserScan size={32} color="#0A3148" />⠀
        </button>
        <button
          onClick={() => exibirSolucao(3)}
          className={`${
            solucao === 3 ? "shadow-[0_0_0_4px_#2D3674]" : ""
          } border flex items-center justify-center rounded-md transition cursor-pointer`}
        >
          ⠀<IconMessage size={32} color="#333" />⠀
        </button>
        <button
          onClick={() => exibirSolucao(4)}
          className={`${
            solucao === 4 ? "shadow-[0_0_0_4px_#2D3674]" : ""
          } border flex items-center justify-center rounded-md transition cursor-pointer bg-[#ffc8ec]`}
        >
          ⠀<IconUserEdit size={32} color="#4E0C37" />⠀
        </button>
        <button
          onClick={() => exibirSolucao(5)}
          className={`${
            solucao === 5 ? "shadow-[0_0_0_4px_#2D3674]" : ""
          } border flex items-center justify-center rounded-md transition cursor-pointer`}
        >
          ⠀<IconRocket size={32} color="#333" />⠀
        </button>
        <button
          onClick={() => exibirSolucao(6)}
          className={`${
            solucao === 6 ? "shadow-[0_0_0_4px_#2D3674]" : ""
          } border flex items-center justify-center rounded-md transition cursor-pointer bg-[#babfff]`}
        >
          ⠀<IconCirclesRelation size={32} color="#202456" />⠀
        </button>
        <button
          onClick={() => exibirSolucao(7)}
          className={`${
            solucao === 7 ? "shadow-[0_0_0_4px_#2D3674]" : ""
          } border flex items-center justify-center rounded-md transition cursor-pointer`}
        >
          ⠀<IconHistory size={32} color="#333" />⠀
        </button>
        <button
          onClick={() => exibirSolucao(8)}
          className={`${
            solucao === 8 ? "shadow-[0_0_0_4px_#2D3674]" : ""
          } border flex items-center justify-center rounded-md transition cursor-pointer bg-[#ececec]`}
        >
          ⠀<IconFlag size={32} color="#333" /> ⠀
        </button>
        <button
          onClick={() => exibirSolucao(9)}
          className={`${
            solucao === 9 ? "shadow-[0_0_0_4px_#2D3674]" : ""
          } border flex items-center justify-center rounded-md transition cursor-pointer`}
        >
          ⠀<IconMathSymbols size={32} color="#333" />⠀
        </button>
      </div>
    </section>
  );
}
