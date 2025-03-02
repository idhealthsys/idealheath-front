"use client";
import CustomInput from "@/components/Shared/FormsComponets/customInput";
import Stepper, { Step } from "./stepper";
import React, { useEffect, useState } from "react";
import PlanoItem from "./planoItem";
import useLocalStorage from "@/Hooks/useLocalStorage";
import planPicture from "../../../public/planPicture.svg";
import Image from "next/image";


interface UserData {
  name: string;
  email: string;
  picture: string;
}

export default function ComprasPassos() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [plano, setPlano] = useLocalStorage({ key: "plano", inicial: "" });
  const [nome, setNome] = useLocalStorage({ key: "nome", inicial: "" });
  const [estado, setEstado] = useLocalStorage({ key: "estado", inicial: "" });
  const [cidade, setCidade] = useLocalStorage({ key: "cidade", inicial: "" });
  const [cnpj, setCnpj] = useLocalStorage({ key: "cnpj", inicial: "" });

  useEffect(() => {
    const storedUserData = sessionStorage.getItem("userData");

    if (storedUserData) {
      try {
        const parsedUserData: UserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
      } catch (error) {
        console.error("Erro ao fazer parse dos dados do usuário:", error);
      }
    }
  }, []);

  const userName = userData?.name || "Nome não encontrado";
  const picture = userData?.picture || "foto não encontrada";

  const handlePlanSelect = (titulo: string) => {
    setSelectedPlan(titulo);
    setPlano(titulo);
  };

  return (
    <main>
      <div className="">
        <Stepper
          initialStep={1}
          onStepChange={(step) => {
            console.log(step);
          }}
          onFinalStepCompleted={() => console.log("All steps completed!")}
          backButtonText="Previous"
          nextButtonText="Next"
        >
          <Step>
            <div>
              {userData ? (
                <>
                  <div className="flex items-center justify-center">
                    <img
                      src={picture}
                      alt="user-picture"
                      className="w-20 h-20 rounded-full mb-4"
                    />
                  </div>
                  <CustomInput
                    id="nome"
                    label="Nome"
                    name="nome"
                    placeholder={userName}
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    disabel
                  />
                  <CustomInput
                    id="estado"
                    label="Estado"
                    name="estado"
                    placeholder="ex: Rio de janeiro"
                    type="text"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                  />
                  <CustomInput
                    id="cidade"
                    label="Cidade"
                    name="cidade"
                    placeholder="ex: Niterói"
                    type="text"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                  />
                  <CustomInput
                    id="cnpj"
                    label="CNPJ"
                    name="cnpj"
                    placeholder="ex: 12.345.678/9012-34"
                    type="text"
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                  />
                </>
              ) : (
                <p>Carregando dados do usuário...</p>
              )}
            </div>
          </Step>

          <Step>
            <div className="flex max-md:flex-col max-md:items-center items-start justify-center gap-6 m-4 mb-20">
              <PlanoItem
                titulo="Essencial"
                preco=" 99,00 "
                descricao="Ideal para equipes pequenas. Relatórios personalizados para até 10 pessoas, direto no seu WhatsApp."
                beneficio1="✔ Relatórios personalizados"
                beneficio2="✔ Envio via WhatsApp"
                beneficio3="✔ Suporte básico"
                beneficio4=""
                beneficio5=""
                popular=""
                isSelected={selectedPlan === "Essencial"}
                onSelect={handlePlanSelect}
              />
              <PlanoItem
                titulo="Profissional"
                preco=" 199,00 "
                descricao="Para equipes maiores. Automatize tarefas e personalize relatórios para até 50 pessoas. Envio automático via WhatsApp."
                beneficio1="✔ Tudo do plano Essencial"
                beneficio2="✔ Automação de tarefas"
                beneficio3="✔ Suporte prioritário"
                beneficio4=""
                beneficio5=""
                popular=""
                isSelected={selectedPlan === "Profissional"}
                onSelect={handlePlanSelect}
              />
              <PlanoItem
                titulo="Corporativo"
                preco=" 399,00 "
                descricao="Gestão completa de dados para até 100 pessoas. Automatize, personalize e integre com seus sistemas."
                beneficio1="✔ Tudo dos planos anteriores"
                beneficio2="✔ Armazenamento em nuvem ilimitado"
                beneficio3="✔ Relatórios avançados"
                beneficio4="✔ Análise de dados"
                beneficio5="✔ Suporte dedicado"
                popular=""
                isSelected={selectedPlan === "Corporativo"}
                onSelect={handlePlanSelect}
              />
            </div>
          </Step>
          <Step>
            <div className="flex flex-col md:flex-row items-center gap-5 justify-center lg:gap-28">
              <div className="relative border p-5 mx-8 max-lg:w-[340px] rounded-md w-[400px] h-[200px]">
                <div className="text-xl font-bold bg-roxo-100 text-roxo-300 py-2 px-4 rounded-md mb-4 text-center flex items-center justify-between">
                  <p className="">Plano {plano}</p>
                  <span className="text-sm">✔</span>
                </div>
                <p className="text-2xl font-bold text-roxo-300 mb-4 ">
                  {userName}
                </p>
                <span className="mb-2 block">
                  {cidade} - {estado}
                </span>
                <p className="mb-2">{cnpj}</p>
                <Image className="absolute right-8 top-16 size-34" src={planPicture} alt=""/>
              </div>
              <div className="border rounded-md max-lg:w-[340px] w-[400px] h-[200px] flex items-center justify-center">
                Use o componente da api de chekout aqui!
              </div>
            </div>
          </Step>
        </Stepper>
      </div>
    </main>
  );
}
