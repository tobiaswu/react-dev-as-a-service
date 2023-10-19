import { HeroSection } from '@/components/HeroSection/HeroSection';
import { Footer } from '@/components/Footer/Footer';
import { SkillSection } from '@/components/SkillSection/SkillSection';
import { ExperienceSection } from '@/components/ExperienceSection/ExperienceSection';
import { ContactSection } from '@/components/ContactSection/ContactSection';

export default function Home() {
  return (
    <>
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
      <Footer />
    </>
  );
}
