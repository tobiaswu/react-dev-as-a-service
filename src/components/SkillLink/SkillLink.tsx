import Link from 'next/link';

interface SkillLinkProps {
  title: string;
  href: string;
}

export const SkillLink = ({ title, href }: SkillLinkProps) => {
  return (
    <Link
      href={href}
      className="text-palatinate_blue hover:text-azure transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </Link>
  );
};
