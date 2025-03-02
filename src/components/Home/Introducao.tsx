"use client";
import { motion, LayoutGroup } from "framer-motion";
import RotatingText from "@/ui/blocks/TextAnimations/RotatingText/RotatingText";
import Threads from "@/ui/blocks/Backgrounds/Threads/Threads";

export default function Introducao() {
  return (
    <motion.section
   
      className="bg-zinc-800"
    >
      <div className="container text-center">
        <LayoutGroup>
          <motion.div className="pt-10 pb-24 ">
            <h1 className="font-thin text-4xl tracking-wide leading-18 lg:text-5xl text-white mb-8 text-balance">
              Agilize seu atendimento e crie
              <motion.span className="flex items-center justify-center">
                <RotatingText
                  texts={[
                    "resultados surpreendentes",
                    "crescimento acelerado",
                    "clientes fidelizados",
                  ]}
                  mainClassName="font-bold "
                  rotationInterval={3000}
                />
              </motion.span>{" "}
              com <strong className="font-bold">Ideal Health</strong>
            </h1>
            <p className="text-stone-400 text-balance">
              Domine a Gestão de Leads com Automação Inteligente para Facebook e
              Instagram e WhatsApp.
            </p>
          </motion.div>
        </LayoutGroup>
      </div>
    </motion.section>
  );
}
