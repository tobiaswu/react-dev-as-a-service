import Image from 'next/image';
import { SkillCard } from '../SkillCard/SkillCard';
import { backendText, frontendText } from '@/lib/texts';
import Link from 'next/link';
import { SectionHeading } from '../SectionHeading/SectionHeading';

export const SkillSection = () => {
  return (
    <section>
      <SectionHeading
        title="Elevating Technology"
        description="In any given moment we have two options: to step forward into growth
or to step back into safety."
      />

      <div className="mt-40 px-4 grid md:grid-cols-2 gap-5">
        <div className="flex flex-col lg:flex-row md:col-span-2 rounded-xl overflow-scroll bg-white bg-opacity-70">
          <div className="flex-[4] p-6 md:p-16">
            <h3 className="sm:text-4xl text-3xl mb-4 font-bold bg-gradient-to-r from-azure to-palatinate_blue-400 text-transparent bg-clip-text">
              Accomplishments
            </h3>
            <p className="text-azure-200 mb-6 text-lg">
              Contributed significantly to frontend development at SAP, creating
              visually appealing, user-friendly interfaces. Implemented
              interactive state-of-the-art analytics dashboards spanning various
              categories. These dashboards empower companies with real-time
              insights, facilitating informed decisions in day-to-day
              activities. Demonstrated proficiency in seamlessly integrating
              APIs into applications, enhancing data communication and
              application functionality. Prioritized software reliability by
              crafting comprehensive software tests, ensuring a stable codebase
              and minimizing potential issues. Additionally, led the end-to-end
              design and project planning for a web app.
            </p>
            <p>
              <Link
                className="flex gap-2 items-center text-palatinate_blue hover:text-azure font-bold transition duration-300"
                href="mailto:mail@tobiaswupperfeld.com"
              >
                <Image
                  src="/icons/arrow-right.svg"
                  alt="arrow-right"
                  loading="lazy"
                  width="24"
                  height="24"
                />
                Contact me for references
              </Link>
            </p>
          </div>
          <div className="flex-[6] self-center text-center">
            <Image
              className="my-10"
              src="/img/wordcloud.webp"
              alt="wordcloud"
              loading="lazy"
              width="560"
              height="560"
            />
          </div>
        </div>
        <SkillCard title="Frontend" description={frontendText} />
        <SkillCard title="Backend" description={backendText} />
      </div>
    </section>
  );
};
