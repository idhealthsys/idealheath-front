type PlanoInfo = {
  name: string;
  description: string;
  features: string[];
  className?: string;
};

export default function PlanoInfo({
  name,
  description,
  features,
  className,
}: PlanoInfo) {
  return (
    <div className={className}>
      <h2 className="text-3xl lg:text-5xl font-bold mb-4">{name}</h2>
      <p className=" mb-4 text-2xl lg:text-3xl max-w-[440px]">{description}</p>
      <ul className="*:before:size-2 *:before:bg-roxo-400 *:before:block *:before:rounded-full *:before:ml-[-20px] relative *:before:absolute *:before:mt-[10px] *:ml-6">
        {features.map((i, index) => (
          <li key={index} className="mb-2">
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
