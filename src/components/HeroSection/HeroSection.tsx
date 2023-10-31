'use client';

import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <section className="w-full h-screen bg-fixed bg-cover lg:bg-center sm:bg-left bg-hero-pattern-s sm:bg-hero-pattern flex justify-end lg:items-center items-end">
      <div className="pt-60 xl:pt-8 p-8 xl:pr-40 bg-gradient-to-b from-transparent to-english_violet-100 w-full lg:w-auto lg:bg-none">
        <h1 className="mb-8 text-4xl font-bold text-gold_metallic animate-slide-up">
          Hi, I&apos;m Tobias Wupperfeld
        </h1>
        <div className="animate-slide-up">
          <TypeAnimation
            className="text-2xl text-white"
            preRenderFirstString={true}
            sequence={[
              500,
              "I'm a Software Engineer",
              1000,
              "I'm a IT Consultant",
              1000,
              "I'm a React TS Veteran",
              1000,
              "I'm a AI Enthusiast",
              500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="my-8 max-w-xl animate-slide-up text-lg">
          I&apos;m a Full Stack Software Engineer empowering your business with
          scalable web solutions available for contract work and freelance
          projects
        </p>
        <div className="flex items-center mt-8 animate-slide-up">
          <Link href="mailto:mail@tobiaswupperfeld.com">
            <button className="mr-4 bg-gold_metallic-400 text-white py-2 px-4 rounded-xl uppercase hover:bg-transparent border-4 border-gold_metallic-400 font-semibold transition duration-300">
              Get in touch
            </button>
          </Link>
          <Link
            href="CV-WUPPERFELD-TOBIAS-EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="py-2 px-4 rounded-xl uppercase border-4 border-white hover:border-gold_metallic text-white hover:text-gold_metallic font-semibold transition duration-300">
              Download profile
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
