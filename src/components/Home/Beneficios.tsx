import Image from "next/image";
import Decoracao from "../../../public/decoracao.svg";
import BeneficioCard from "./BeneficioCard";

const Beneficios = () => {
  return (
    <section className="bg-[#E4F5FF] py-10">
      <div className="container grid grid-cols-3 grid-rows-2 gap-10 max-lg:grid-cols-1 showAppear">
        <div>
          <Image src={Decoracao} alt="" />
          <h1 className="text-4xl lg:text-5xl mt-8">
            Veja os{" "}
            <strong>
              benefícios <br />
            </strong>
            de nossa <br />
            <strong>automação</strong>.
          </h1>
        </div>

        <BeneficioCard
          tag="1"
          tagColor="bg-[#BABFFF]"
          titulo="Capture Leads Qualificados"
          texto1="Obtenha leads qualificados diretamente do Facebook e Instagram."
          texto2="Diga adeus à digitação manual de dados"
          texto3="Conversão através de formulários e landing pages otimizadas."
        />
        <BeneficioCard
          tag="2"
          tagColor="bg-[#FFC8EC]"
          titulo="Nutre Leads com Personalização"
          texto1="Envie mensagens automáticas e personalizadas para cada lead"
          texto2="Aumente as chances de conversão com nutrição eficaz de leads"
          texto3="Crie jornadas de relacionamento sob medida com base em ações e interesses "
        />
        <BeneficioCard
          tag="3"
          tagColor="bg-[#F6EAC6]"
          titulo="Integração Perfeita"
          texto1="Conecte-se com o Facebook, Instagram e WhatsApp para gerenciar seus leads em um único lugar."
          texto2="Importe leads automaticamente de suas plataformas de mídia social."
          texto3="Sincronize dados de leads entre suas ferramentas de marketing e vendas."
        />
        <BeneficioCard
          tag="4"
          tagColor="bg-[#CDE8E1]"
          titulo="Otimize Campanhas com Análise"
          texto1="Obtenha análises avançadas e relatórios detalhados sobre suas campanhas de captura."
          texto2="Identifique os canais mais eficazes para gerar leads qualificados."
          texto3="Acompanhe o desempenho de suas mensagens e jornadas de relacionamento."
        />
        <BeneficioCard
          tag="5"
          tagColor="bg-[#B8E4FF]"
          titulo="Gerencie Leads com Eficiência"
          texto1="Visualize todos os seus leads em um único painel intuitivo e fácil de usar."
          texto2="Acesse informações completas sobre cada lead, incluindo dados de contato, histórico de interações. "
          texto3="Organize e segmente seus leads com base em critérios personalizados."
        />
      </div>
    </section>
  );
};

export default Beneficios;
