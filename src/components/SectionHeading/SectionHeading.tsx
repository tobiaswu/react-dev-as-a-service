import AnimateOnScroll from '@/util/AnimateOnScroll';

interface SectionHeadingProps {
  title: string;
  description: string;
}

export const SectionHeading = ({ title, description }: SectionHeadingProps) => {
  return (
    <div className="text-center mt-40 flex flex-col items-center px-4">
      <AnimateOnScroll reappear>
        <h2 className="font-bold text-5xl mb-6 text-azure-200">{title}</h2>
      </AnimateOnScroll>
      <AnimateOnScroll reappear>
        <p className="max-w-md text-xl text-azure-200">{description}</p>
      </AnimateOnScroll>
    </div>
  );
};
