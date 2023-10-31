import { FlipCard } from '@/components/FlipCard/FlipCard';
import { Navigation } from '@/components/Navigation/Navigation';
import { imgTiles } from '@/lib';
import { Pages } from '@/types';
import AnimateOnScroll from '@/util/AnimateOnScroll';

export default function Portfolio() {
  return (
    <div className="bg-[url(/img/blob-portfolio.svg)] bg-cover bg-top">
      <Navigation page={Pages.portfolio} />
      <div className="container mx-auto pb-40 px-4">
        <AnimateOnScroll>
          <h1 className="pt-32 pb-24 text-5xl font-bold bg-gradient-to-r from-azure to-palatinate_blue-400 text-transparent bg-clip-text">
            My Portfolio
          </h1>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-2 gap-8">
          {imgTiles.map((tile) => {
            return (
              <FlipCard
                key={tile.source}
                source={tile.source}
                title={tile.title}
                subTitle={tile.subTitle}
                description={tile.description}
                btnText="Contact Me"
                btnLink="/#contact"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
