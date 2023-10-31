import { HeroSection } from '@/components/HeroSection/HeroSection';
import { SkillSection } from '@/components/SkillSection/SkillSection';
import { ExperienceSection } from '@/components/ExperienceSection/ExperienceSection';
import { ContactSection } from '@/components/ContactSection/ContactSection';
import { Navigation } from '@/components/Navigation/Navigation';
import { Pages } from '../types';

export default function Home() {
  return (
    <>
      <Navigation page={Pages.home} />
      <div className="bg-[url(/img/blob-intro.svg)] bg-cover bg-top">
        <HeroSection />
        <div className="container mx-auto">
          <SkillSection />
        </div>
      </div>
      <div className="container mx-auto">
        <ExperienceSection />
      </div>
      <div className="container mx-auto py-40">
        <ContactSection />
      </div>
    </>
  );
}
