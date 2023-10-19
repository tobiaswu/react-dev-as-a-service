import Link from 'next/link';

export interface ExperienceCardProps {
  title: string;
  description: React.ReactNode;
  linkText: string;
  href: string;
}

export const ExperienceCard = ({
  title,
  description,
  linkText,
  href,
}: ExperienceCardProps) => {
  return (
    <div className="rounded-xl overflow-scroll bg-white bg-opacity-70 p-6 md:p-16">
      <h4 className="text-2xl font-bold bg-gradient-to-r from-azure to-palatinate_blue-400 text-transparent bg-clip-text mb-4">
        <>
          {title}
          <br></br>
          <Link
            className="text-palatinate_blue hover:text-azure text-lg transition duration-300"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkText}
          </Link>
        </>
      </h4>
      <p className="text-azure-200 text-lg">{description}</p>
    </div>
  );
};
