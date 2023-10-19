'use client';

import Link from 'next/link';
import { ExperienceCard } from '../ExperienceCard/ExperienceCard';
import AnimateOnScroll from '@/util/AnimateOnScroll';

export interface ExperienceSectionProps {}

export const ExperienceSection = ({}: ExperienceSectionProps) => {
  return (
    <section className="mt-20 px-4">
      <div className="text-center flex flex-col items-center">
        <AnimateOnScroll>
          <h3 className="font-bold text-5xl mb-6 text-azure-200">
            Professional Experience
          </h3>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <p className="text-azure-200 max-w-md text-xl">
            I&apos;ve been building web applications with enthusiasm and
            commitment since 2019
          </p>
        </AnimateOnScroll>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-32">
        <ExperienceCard
          title={
            <>
              Fullstack Engineer
              <br></br>
              <Link
                className="text-palatinate_blue hover:text-azure text-lg transition duration-300"
                href="https://www.procure.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ProcureAi_Ltd
              </Link>
            </>
          }
          description={
            <>
              08/2022 - 07/2023: Primarily worked on the product Enhance Ai as
              part of an augmented procurement platform. Enhance Ai offers
              benefits such as elevating data-driven decision making, supporting
              strategic buying with advanced search capabilities, and seamless
              integration with existing backend systems and data sources.
              <br></br>
            </>
          }
        />
        <ExperienceCard
          title={
            <>
              Frontend Engineer
              <br></br>
              <Link
                className="text-palatinate_blue hover:text-azure text-lg transition duration-300"
                href="https://www.sap.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @SAP_SE
              </Link>
            </>
          }
          description={
            <>
              11/2020 - 05/2022: Primarily worked on a content-management web
              application for internal marketing and sales teams with thousands
              of users.
              <br></br>
              In addition worked on a futuristic presentation creation tool
              which enables users to easily create professional looking slides.
            </>
          }
        />
        <ExperienceCard
          title={
            <>
              Chief Automation Officer
              <br></br>
              <Link
                className="text-palatinate_blue hover:text-azure text-lg transition duration-300"
                href="/"
              >
                @TobiasWupperfeld
              </Link>
            </>
          }
          description={
            <>
              2019 - today: I&apos;ve been working on several projects. My
              current ventures are listed here{' '}
              <Link
                className="text-palatinate_blue hover:text-azure transition duration-300"
                href="https://wupperfeld.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                (wupperfeld.org)
              </Link>
              .<br></br>
              An agency specializing in Ai solutions & automation (coming soon).
              <br></br>A volunteer app (coming soon).
              <br></br>A trucking route creator app (coming soon).
            </>
          }
        />
      </div>
    </section>
  );
};
