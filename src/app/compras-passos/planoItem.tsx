type ComprasPlanoItemProps = {
  titulo: string;
  preco: string;
  descricao: string;
  beneficio1: string;
  beneficio2: string;
  beneficio3: string;
  beneficio4?: string;
  beneficio5?: string;
  popular?: string;
  isSelected: boolean; 
  onSelect: (titulo: string) => void; 
};

export default function PlanoItem({
  titulo,
  preco,
  descricao,
  beneficio1,
  beneficio2,
  beneficio3,
  beneficio4,
  beneficio5,
  popular,
  isSelected, 
  onSelect, 
}: ComprasPlanoItemProps) {
  const handleSelect = () => {
    onSelect(titulo); 
  };

  return (
    <div
      className={`max-w-[300px] border border-roxo-400 p-8 rounded-md *:text-center cursor-pointer hover:bg-roxo-500 hover:text-white transition-all ${
        isSelected ? "bg-roxo-500 text-white shadow-[0_0_0_8px_#8F97CE]" : ""
      }`}
      onClick={handleSelect}
    >
      <input
        type="radio"
        name="plano"
        id={titulo}
        checked={isSelected}
        className="hidden"
        onChange={handleSelect}
      />
      <label htmlFor={titulo}>
        <h1 className="font-bold text-2xl text-center mb-4">{titulo}</h1>
        <span className="block text-center mb-4">
          R${" "}
          <span className="text-2xl font-bold">
            {preco} <span className="text-sm font-normal">/mês</span>
          </span>
        </span>
        <p className="text-center text-gray-500 mb-4">{descricao}</p>
        <hr className="my-4" />
        <ul className="*:text-start ">
          <li className="texto">{beneficio1}</li>
          <li className="texto">{beneficio2}</li>
          <li className="texto">{beneficio3}</li>
          <li className="texto">{beneficio4}</li>
          <li className="texto">{beneficio5}</li>
        </ul>
      </label>
    </div>
  );
}
