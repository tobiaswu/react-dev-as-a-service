'use client';

import AnimateOnScroll from '@/util/AnimateOnScroll';
import Image from 'next/image';
import Link from 'next/link';

export interface ContactSectionProps {}

export const ContactSection = ({}: ContactSectionProps) => {
  return (
    <section className="flex flex-col sm:flex-row justify-between items-center px-4">
      <div className="flex-[6] mb-8 sm:mb-0">
        <AnimateOnScroll>
          <h3 className="font-bold text-5xl mb-6 text-azure-200">
            Let&apos;s work together!
          </h3>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <p className="text-azure-200 max-w-md text-xl">
            Feel free to send me your inquiry via email or contact me on
            WhatsApp or LinkedIn
          </p>
        </AnimateOnScroll>
      </div>
      <div className="flex flex-[6]">
        <Link
          className="mr-4 hover:transition hover:opacity-60 hover:ease-in-out"
          href="mailto:mail@tobiaswupperfeld.com"
        >
          <Image
            src="/mail.svg"
            loading="lazy"
            width="56"
            height="56"
            alt="mail icon"
          />
        </Link>
        <Link
          className="mr-4 hover:transition hover:opacity-60 hover:ease-in-out"
          href="https://wa.link/3p4mp7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/whatsapp.svg"
            loading="lazy"
            width="56"
            height="56"
            alt="whatsapp icon"
          />
        </Link>
        <Link
          className="mr-4 hover:transition hover:opacity-60 hover:ease-in-out"
          href="https://www.linkedin.com/in/tobias-wupperfeld/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin.svg"
            loading="lazy"
            width="56"
            height="56"
            alt="linkedin icon"
          />
        </Link>
        <Link
          className="mr-4 hover:transition hover:opacity-60 hover:ease-in-out"
          href="https://github.com/tobiaswu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/github.svg"
            loading="lazy"
            width="56"
            height="56"
            alt="github icon"
          />
        </Link>
        <Link
          className="hover:transition hover:opacity-60 hover:ease-in-out"
          href="https://gitlab.com/tobias_wupperfeld"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/gitlab.svg"
            loading="lazy"
            width="56"
            height="56"
            alt="gitlab icon"
          />
        </Link>
      </div>
    </section>
  );
};
