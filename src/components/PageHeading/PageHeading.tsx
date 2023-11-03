import AnimateOnScroll from '@/util/AnimateOnScroll';

export interface PageHeadingProps {
  title: string;
}

export const PageHeading = ({ title }: PageHeadingProps) => {
  return (
    <AnimateOnScroll>
      <h1 className="pt-32 pb-24 text-5xl font-bold bg-gradient-to-r from-azure to-palatinate_blue-400 text-transparent bg-clip-text">
        {title}
      </h1>
    </AnimateOnScroll>
  );
};
