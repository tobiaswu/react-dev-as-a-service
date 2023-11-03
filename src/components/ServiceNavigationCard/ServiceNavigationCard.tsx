import Image from 'next/image';
import Link from 'next/link';

export interface ServiceNavigationCardProps {
  name: string;
  slug: string;
}

export const ServiceNavigationCard = ({
  name,
  slug,
}: ServiceNavigationCardProps) => {
  return (
    <div className="bg-white/60 rounded-xl border-2 flex justify-between items-center bg-[url(/img/blob-portfolio.svg)] bg-cover bg-top shadow-sm">
      <Link href={slug}>
        <p className="text-lg font-semibold py-8 pl-8">{name}</p>
      </Link>
      <Link className="flex gap-2 pl-8" href="/#contact">
        <Image
          src="/icons/arrow-right.svg"
          alt="contact icon"
          width="24"
          height="24"
          loading="lazy"
        />
        <p className="font-semibold py-8 pr-8">Contact for pricing</p>
      </Link>
    </div>
  );
};
