import Beneficios from "@/components/Home/Beneficios";
import Cta from "@/components/Home/Cta";
import Introducao from "@/components/Home/Introducao";
import Solucoes from "@/components/Home/Solucoes";

export default function Home() {
  return (
    <div>
      <Introducao />
      <Solucoes/>
      <Beneficios/>
      <Cta/>
    </div>
  );
}
