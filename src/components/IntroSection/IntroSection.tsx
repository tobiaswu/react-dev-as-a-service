'use client';

import AnimateOnScroll from '@/util/AnimateOnScroll';

export const IntroSection = () => {
  return (
    <section className="text-center mt-40 flex flex-col items-center px-4">
      <AnimateOnScroll>
        <h2 className="font-bold text-5xl mb-6 text-azure-200">
          Elevating Technology
        </h2>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <p className="text-azure-200 max-w-md text-xl">
          In any given moment we have two options: to step forward into growth
          or to step back into safety.
        </p>
      </AnimateOnScroll>
    </section>
  );
};
