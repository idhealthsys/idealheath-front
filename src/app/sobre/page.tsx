import Footer from "@/components/Shared/footer";
import Header from "@/components/Shared/header";

export default function Sobre() {
  return (
    <>
      <main className="animate-slideIn">
        <section className="container">
          <div className="mb-20">
            <div>
              <span className="block mt-16 text-[#888]">
                Conheça mais sobre nós!
              </span>
              <h1 className="text-4xl font-bold lg:text-5xl mb-16">
                Sobre a Ideal Health
              </h1>
            </div>
            <p className="mb-8 text-[#888]">
              A Ideal Health é uma empresa inovadora que se dedica a simplificar
              e otimizar a gestão de leads para corretores de planos de saúde.
              Através de nossa plataforma completa e intuitiva, você pode:
            </p>
            <ul className="pl-5 mb-8 *:mb-4 *:leading-[1.6]  relative *:before:size-2 *:before:bg-green-300 *:before:absolute *:before:ml-[-1rem] *:before:mt-[10px] *:before:rounded-full">
              <li className="">
                Integrar leads de diversas fontes e centralizar todas as 
                informações em um só lugar.
              </li>
              <li className="">
                Realizar o primeiro atendimento do lead de forma rápida e
                eficiente, qualificando-o e aumentando as chances de conversão.
              </li>
              <li className="">
                Entregar leads qualificados diretamente no WhatsApp, agilizando
                o processo de venda e fidelizando seus clientes.
              </li>
              <li className="">
                Utilizar um sistema de gestão descomplicado, com ferramentas
                intuitivas e fáceis de usar.
              </li>
              <li className="">
                Acessar o simulador de planos de saúde mais atualizado do
                mercado, oferecendo aos seus clientes as melhores opções de
                acordo com suas necessidades.
              </li>
            </ul>
            <p className="mb-8 text-[#888]">
              Evoluindo para atender às suas necessidades:
            </p>
            <ul className="pl-5 mb-8 *:mb-4 *:leading-[1.6]  relative *:before:size-2 *:before:bg-green-300 *:before:absolute *:before:ml-[-1rem] *:before:mt-[10px] *:before:rounded-full">
              <li className="">
                Estamos em constante evolução, buscando oferecer soluções cada
                vez mais completas para os nossos clientes. Em breve, lançaremos
                um sistema para simulação de cotações de diversos planos de
                saúde, permitindo que você faça comparações detalhadas e
                apresente a seus clientes as ofertas mais vantajosas.
              </li>
            </ul>
            <p className="mb-8 text-[#888]">Com a Ideal Health, você tem:</p>
            <ul className="pl-5 mb-8 *:mb-4 *:leading-[1.6]  relative *:before:size-2 *:before:bg-green-300 *:before:absolute *:before:ml-[-1rem] *:before:mt-[10px] *:before:rounded-full">
              <li className="">
                Mais tempo para se dedicar ao que realmente importa: vender!
              </li>
              <li className="">Maior taxa de conversão de leads em vendas.</li>
              <li className="">
                Clientes mais satisfeitos com um atendimento rápido e
                personalizado.
              </li>
              <li className="">
                Acesso às melhores ferramentas do mercado para impulsionar seu
                negócio.
              </li>
            </ul>
            <p className="mb-8 text-[#888]">
              Junte-se à Ideal Health e transforme a gestão de leads na sua
              maior aliada para o sucesso!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
