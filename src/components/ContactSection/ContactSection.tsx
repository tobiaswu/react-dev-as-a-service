import AnimateOnScroll from '@/util/AnimateOnScroll';
import { ContactIcon } from '../ContactIcon/ContactIcon';
import { contactOptions } from '@/lib';
import Image from 'next/image';
import Link from 'next/link';

export const ContactSection = () => {
  return (
    <section
      className="flex flex-col sm:flex-row justify-between items-center px-4"
      id="contact"
    >
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
      <div className="flex-[6]">
        <div className="flex mb-8">
          {contactOptions.map((option, index) => {
            return (
              <ContactIcon
                key={index}
                href={option.link}
                src={option.src}
                alt={option.name}
                title={option.title}
              />
            );
          })}
        </div>
        <div className="flex gap-4">
          <Link
            className="hover:transition hover:opacity-60"
            href="https://www.freelancermap.de/profil/tobias-wupperfeld"
            target="_blank"
            rel="noopener noreferrer"
            title="Profil von Tobias Wupperfeld auf www.freelancermap.de"
          >
            <Image
              loading="lazy"
              height="24"
              width="118"
              src="https://www.freelancermap.de/images/widgets/dashboard/fm-profile-badge-black.svg"
              alt="freelancermap batch"
            />
          </Link>
          <Link
            className="hover:transition hover:opacity-60"
            href="https://on.contra.com/ddHbbg"
            target="_blank"
            rel="noopener noreferrer"
            title="Profile of Tobias Wupperfeld on www.contra.com"
          >
            <Image
              loading="lazy"
              height="24"
              width="118"
              src="https://contra.com/static/embed/media/hiremeoncontra-light@2x.png"
              alt="contra batch"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
