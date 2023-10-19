'use client';

import { ExperienceCard } from '../ExperienceCard/ExperienceCard';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { experiences } from '@/lib/experiences';

export const ExperienceSection = () => {
  return (
    <section>
      <SectionHeading
        title="Professional Experience"
        description="I've been building web applications with enthusiasm and
            commitment since 2019"
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-32">
        {experiences.map((item, index) => {
          return (
            <ExperienceCard
              key={index}
              title={item.title}
              description={item.description}
              href={item.link}
              linkText={item.linkText}
            />
          );
        })}
      </div>
    </section>
  );
};
