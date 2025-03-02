"use client";
type CustomInput = {
  placeholder: string;
  id: string;
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function CustomInput({
  id,
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
}: CustomInput) {
  return (
    <div>
      <label className="block text-gray-700 text-sm mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="p-3 mb-4 border-2 focus-outline-none border-gray-300 rounded-md 
        w-full transition-all ease-in-out focus:border-roxo-400 focus:ring-0 focus:ring-roxo-100 focus:outline-hidden
        focus:shadow-[0_0_0_4px_#8F97CE]"
      />
      <p></p>
    </div>
  );
}
