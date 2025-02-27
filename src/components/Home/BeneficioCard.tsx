type CardBeneficioProps = {
  titulo: string;
  texto1: string;
  texto2: string;
  texto3: string;
  tag: string;
  tagColor: string;
}
const CardBeneficio = ({
  tag,
  tagColor,
  titulo,
  texto1,
  texto2,
  texto3,
}: CardBeneficioProps) => {
  return (
    <div className="p-5 bg-white rounded-lg relative">
      <div
        className={`${tagColor}  h-11 w-11 rounded-full flex items-center justify-center font-bold absolute top-[-1.25rem] left-[-1.25rem] `}
      >
        {tag}
      </div>
      <h2 className="text-2xl font-bold mb-5">{titulo}</h2>
      <p className="text-gray-500 mb-4 ml-4 relative before:h-1 before:w-2 before:absolute before:bg-[#B8E4FF] before:left-0 before:top-[10px] before:ml-[-1rem]">
        {texto1}
      </p>
      <p className="text-gray-500 mb-4 ml-4 relative before:h-1 before:w-2 before:absolute before:bg-[#B8E4FF] before:left-0 before:top-[10px] before:ml-[-1rem]">{texto2}</p>
      <p className="text-gray-500 mb-4 ml-4 relative before:h-1 before:w-2 before:absolute before:bg-[#B8E4FF] before:left-0 before:top-[10px] before:ml-[-1rem]">{texto3}</p>
    </div>
  );
};

export default CardBeneficio;
