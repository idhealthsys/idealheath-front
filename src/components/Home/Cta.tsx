export default function Cta(){
  return (
    <section className={`flex items-center gap-10 my-28 container `}>
      <div>
        <div>
          <h1 className="text-4xl lg:text-5xl mb-5 font-bold">
            Chega de perder leads valiosos <br /> e lutar para converter
            clientes!
          </h1>
          <p className="mb-5">
            Solicite uma demonstração gratuita hoje mesmo e descubra <br /> como
            Ideal Health pode transformar a gestão de leads do seu negócio!
          </p>
          <hr className="mb-5" />
        </div>

        <div className="flex flex-wrap max-lg:gap-0 gap-10">
          <div className="*:relative *:mb-4 *:ml-4 *:before:size-[10px] *:before:bg-green-400 *:before:absolute *:before:rounded-full *:before:top-[8px] *:before:left-[-1rem]">
            <p>Capture, nutra, converta!</p>
            <p>Funcionalidades adequadas as suas necessidades!</p>
          </div>
          <div className="*:relative *:mb-4 *:ml-4 *:before:size-[10px] *:before:bg-green-400 *:before:absolute *:before:rounded-full *:before:top-[8px] *:before:left-[-1rem]">
            <p>Automação em Facebook, Instagram, WhatsApp!</p>
            <p>Experimente a plataforma, avalie suas necessidades!</p>
          </div>
        </div>
      </div>
    </section>
  );
}