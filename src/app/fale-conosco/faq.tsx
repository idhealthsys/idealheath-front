import Acordion from "./accordion";
import { perguntasERespostas } from "./perguntasERespostas";
export default function FAQ() {
  return (
    <>
      {perguntasERespostas.map((i, index) => (
        <Acordion key={index} pergunta={i.pergunta} resposta={i.resposta} />
      ))}
    </>
  );
}
