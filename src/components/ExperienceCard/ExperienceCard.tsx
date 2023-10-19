export interface ExperienceCardProps {
  title: React.ReactNode;
  description: React.ReactNode;
}

export const ExperienceCard = ({ title, description }: ExperienceCardProps) => {
  return (
    <div className="rounded-xl overflow-scroll bg-white p-6 md:p-16">
      <h4 className="text-2xl font-bold bg-gradient-to-r from-azure to-palatinate_blue-400 text-transparent bg-clip-text mb-4">
        {title}
      </h4>
      <p className="text-azure-200 text-lg">{description}</p>
    </div>
  );
};
