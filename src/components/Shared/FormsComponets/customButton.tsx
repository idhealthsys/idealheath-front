type CustomButtonProps = {
  children: React.ReactNode;
};

export default function CustomButton({ children }: CustomButtonProps) {
  return (
    <button className="py-4 px-8 bg-roxo-400 text-white rounded-sm">
      {children}
    </button>
  );
}
