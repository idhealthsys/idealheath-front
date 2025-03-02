'use client'
import Link from "next/link";
import FAQ from "./faq";
import CustomInput from "@/components/Shared/FormsComponets/customInput";
import CustomButton from "@/components/Shared/FormsComponets/customButton";
import useForm from "@/Hooks/useForm";
import Head from "@/components/Shared/Head";

export default function Contato() {
  const nome = useForm();
  const email = useForm();
  const assunto = useForm();
  const mensagem = useForm();

  return (
    <>
      <Head
        title="Ideal Health - Contato"
        description="Tire suas dúvidas ou entre em contato conosco."
      />
      <main className="animate-slideIn">
        <section className="container mb-28">
          <div>
            <span className="block mt-16 text-gray-500">
              Dúvidas, sugestões ou feedback? Estamos aqui para te ajudar!
            </span>
            <h1 className="text-4xl font-bold lg:text-5xl mb-16">
              Entre em contato conosco!
            </h1>
          </div>
          <p className="mb-12 text-gray-500 text-lg">
            Se você tiver alguma dúvida sobre nossos produtos ou serviços,
            precisar de ajuda com sua conta ou simplesmente quiser nos dar
            feedback, entre em contato conosco. Nossa equipe de atendimento ao
            cliente está sempre pronta para te ajudar. Preencha o formulário
            abaixo e entraremos em contato com você o mais breve possível. Ou
            entre em contato pelo nosso{" "}
            <Link
              href={
                "https://api.whatsapp.com/send?phone=552199999999&text=Ol%C3%A1%20Ideal%20Health%20!%20Poderia%20me%20ajudar%20no%20meu%20caso"
              }
              target="_blank"
              rel="noopener"
              className="font-bold text-[#217654]"
            >
              WhatsApp!
            </Link>
          </p>

          <div className="border p-4 rounded-md bg-gray-100 mb-12">
            <h1 className="text-2xl font-bold mb-2">
              Testando os estados do formulario
            </h1>
            <p>nome: {nome.value}</p>
            <p>email: {email.value}</p>
            <p>assunto: {assunto.value}</p>
            <p>mensagem: {mensagem.value}</p>
          </div>

          <form action="/">
            <div className="flex items-center max-lg:flex-col max-lg:*:w-full flex-wrap gap-4">
              <div className="grow">
                <CustomInput
                  label="Nome"
                  placeholder="Digite o seu nome"
                  id="nome"
                  type="text"
                  name="nome"
                  {...nome}
                />
                <CustomInput
                  label="E-mail"
                  placeholder="seuemail@email.com"
                  id="email"
                  type="email"
                  name="email"
                  {...email}
                />
                <CustomInput
                  label="Assunto"
                  placeholder="Digite o assunto"
                  id="assunto"
                  type="text"
                  name="assunto"
                  {...assunto}
                />
              </div>

              <label className="flex flex-col grow" htmlFor="mensagem">
                Mensagem
                <textarea
                  className="p-4 mb-4 mt-2 border-2 border-gray-300 rounded-md transition-all
                  ease-in-out focus:border-roxo-400 focus:ring-0 focus:ring-roxo-100
                  focus:outline-none focus:shadow-[0_0_0_4px_#8F97CE]"
                  name="mensagem"
                  id="mensagem"
                  cols={30}
                  rows={9}
                  placeholder="Mensagem"
                  value={mensagem.value}
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                    mensagem.setValue(event.target.value)
                  }
                ></textarea>
              </label>
            </div>

            <CustomButton>Enviar mensagem</CustomButton>
          </form>
        </section>

        <article className="container mb-28">
          <div>
            <span className="block mt-16 text-gray-500">
              Tire suas dúvidas sobre a Ideal Health
            </span>
            <h1 className="text-4xl font-bold lg:text-5xl mb-16">
              Perguntas frequentes.
            </h1>
          </div>
          <div>
            <FAQ />
          </div>
        </article>
      </main>
    </>
  );
}
