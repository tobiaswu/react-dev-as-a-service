import { Navigation } from '@/components/Navigation/Navigation';
import { Pages } from '@/types';
import AnimateOnScroll from '@/util/AnimateOnScroll';

export default function Development() {
  return (
    <div className="bg-[url(/img/blob-portfolio.svg)] bg-cover bg-right">
      <Navigation page={Pages.services} />
      <div className="container mx-auto pb-40 px-4">
        <AnimateOnScroll>
          <h1 className="pt-32 pb-24 text-5xl font-bold bg-gradient-to-r from-azure to-palatinate_blue-400 text-transparent bg-clip-text">
            Web App Development
          </h1>
        </AnimateOnScroll>
        Work in progress...
      </div>
    </div>
  );
}
