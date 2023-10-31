export interface NavButtonProps {
  title: string;
}

export const NavButton = ({ title }: NavButtonProps) => {
  return (
    <button className="text-white bg-gold_metallic-400 font-bold mr-4 border-2 rounded-lg px-4 py-2 hover:bg-gold_metallic-300 hover:text-white transition duration-300">
      {title}
    </button>
  );
};
