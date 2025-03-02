type PlanoCard = {
  name: string;
  subtitle: string;
  price: string;
  className?: string;
  onClick: () => void;
};
export default function PlanoCard({
  name,
  subtitle,
  price,
  className,
  onClick,
}: PlanoCard) {
  return (
    <button
      onClick={onClick}
      className={`${className} py-4 px-5 w-full border rounded-md mb-5`}
    >
      <h2 className="font-bold lg:text-start text-center text-2xl lg:text-xl">
        {name}
      </h2>
      <h3 className="text-center text-gray-500 lg:text-start">{subtitle}</h3>
      <div className="lg:text-start text-center">
        <span>R$</span>
        <span className="font-semibold text-2xl lg:text-4xl"> {price} </span>
        <span>/mês</span>
      </div>
    </button>
  );
}
