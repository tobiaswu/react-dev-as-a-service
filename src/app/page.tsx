import { HeroSection } from '@/components/HeroSection/HeroSection';
import { Footer } from '@/components/Footer/Footer';
import { SkillSection } from '@/components/SkillSection/SkillSection';
import { IntroSection } from '@/components/IntroSection/IntroSection';
import { ExperienceSection } from '@/components/ExperienceSection/ExperienceSection';
import { ContactSection } from '@/components/ContactSection/ContactSection';

export default function Home() {
  return (
    <>
      <div className="bg-[url(/blob-blue.svg)] bg-cover bg-top">
        <HeroSection />
        <div className="container mx-auto">
          <IntroSection />
          <SkillSection />
        </div>
      </div>
      <div className="bg-[url(/blob-experience.svg)] bg-cover bg-center pt-20">
        <div className="container mx-auto">
          <ExperienceSection />
        </div>
      </div>
      <div className="py-40">
        <div className="container mx-auto">
          <ContactSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
