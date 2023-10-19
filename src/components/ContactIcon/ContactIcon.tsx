import Image from 'next/image';
import Link from 'next/link';

export interface ContactIconProps {
  href: string;
  src: string;
  alt: string;
}

export const ContactIcon = ({ href, src, alt }: ContactIconProps) => {
  return (
    <Link className="mr-4 hover:transition hover:opacity-60" href={href}>
      <Image src={src} loading="lazy" width="56" height="56" alt={alt} />
    </Link>
  );
};
