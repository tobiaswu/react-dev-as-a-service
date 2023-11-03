import { FlipCard } from '@/components/FlipCard/FlipCard';
import { Navigation } from '@/components/Navigation/Navigation';
import { PageHeading } from '@/components/PageHeading/PageHeading';
import { imgTiles } from '@/lib';
import { Pages } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tobias Wupperfeld | Portfolio | React Applications',
  description:
    'Tobias Wupperfelds portfolio of full stack React applications ✓ modern web development ✓ ex SAP engineer ✓ talk to an expert ✓ get in touch now',
};

export default function Portfolio() {
  return (
    <div className="bg-[url(/img/blob-portfolio.svg)] bg-cover bg-top">
      <Navigation page={Pages.portfolio} />
      <div className="container mx-auto pb-40 px-4">
        <PageHeading title="My Portfolio" />
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
