export interface SkillCardProps {
  title: string;
  description: React.ReactNode;
}

export const SkillCard = ({ title, description }: SkillCardProps) => {
  return (
    <div className="rounded-xl overflow-scroll p-6 md:p-16 bg-white bg-opacity-70">
      <h3 className="text-4xl mb-4 font-bold bg-gradient-to-r from-azure to-palatinate_blue-400 text-transparent bg-clip-text">
        {title}
      </h3>
      <div className="text-azure-200 mb-0 text-lg leading-9">{description}</div>
    </div>
  );
};
