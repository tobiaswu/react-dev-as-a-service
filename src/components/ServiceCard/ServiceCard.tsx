import Image from 'next/image';
import Link from 'next/link';

export interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: React.ReactNode;
  tags: string[];
  link: string;
  linkText: string;
}

export const ServiceCard = ({
  imageSrc,
  title,
  description,
  tags,
  link,
  linkText,
}: ServiceCardProps) => {
  return (
    <div className="rounded-3xl overflow-scroll p-6 md:p-16 bg-white bg-opacity-70">
      <Image
        className="rounded-lg object-cover object-left-top"
        src={imageSrc}
        alt="service"
        loading="lazy"
        width="1000"
        height="1000"
      />
      <h2 className="text-3xl mt-16 mb-8 font-bold bg-gradient-to-r from-azure to-palatinate_blue-400 text-transparent bg-clip-text">
        {title}
      </h2>
      <div className="text-azure-200 text-lg leading-9">{description}</div>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => {
          return (
            <div
              className="bg-azure text-slate-100 rounded-full w-fit px-2 py-1 text-sm"
              key={tag}
            >
              {tag}
            </div>
          );
        })}
      </div>
      <Link
        className="flex gap-2 mt-8 items-center text-palatinate_blue hover:text-azure font-bold transition duration-300"
        href={link}
      >
        <Image
          src="/img/arrow-right.svg"
          alt="arrow-right"
          loading="lazy"
          width="24"
          height="24"
        />
        {linkText}
      </Link>
    </div>
  );
};
