import AnimateOnScroll from '@/util/AnimateOnScroll';
import { ContactIcon } from '../ContactIcon/ContactIcon';
import { contactOptions } from '@/lib';

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
      <div className="flex flex-[6]">
        {contactOptions.map((option, index) => {
          return (
            <ContactIcon
              key={index}
              href={option.link}
              src={option.src}
              alt={option.name}
            />
          );
        })}
      </div>
    </section>
  );
};
