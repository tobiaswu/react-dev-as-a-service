import { Navigation } from '@/components/Navigation/Navigation';
import { PageHeading } from '@/components/PageHeading/PageHeading';
import { ServiceCard } from '@/components/ServiceCard/ServiceCard';
import { conTags, devTags } from '@/lib';
import { Pages } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tobias Wupperfeld | Services | React App Development',
  description:
    'Tobias Wupperfelds react app development services, consulting and engineering ✓ modern web development ✓ ex SAP engineer ✓ talk to an expert ✓ get in touch now',
};

export default function Services() {
  return (
    <div className="bg-[url(/img/blob-portfolio.svg)] bg-cover bg-top">
      <Navigation page={Pages.services} />
      <div className="container mx-auto pb-40 px-4">
        <PageHeading title="My Services" />
        <div className="grid lg:grid-cols-2 gap-8 animate-slide-up">
          <ServiceCard
            key="service-1"
            description="This service offers expert consultation in web app development, providing tailored solutions to meet your unique project needs. It includes a thorough discovery call, transparent project planning, and detailed cost estimation to ensure your project's success."
            tags={conTags}
            title="Business App Consultation"
            imageSrc="/img/tobias-suit-bg.webp"
            link="/services/consultation"
            linkText="View details"
          />
          <ServiceCard
            key="service-2"
            description="This service offers top-tier web app development with a focus on expertise, tailored solutions, and a results-driven approach. It includes frontend and backend development using various technologies, UI/UX design, and an Agile methodology to bring your web app idea to life effectively and efficiently."
            tags={devTags}
            title="Web App Development"
            imageSrc="/img/tobias-suit-bg.webp"
            link="/services/development"
            linkText="View details"
          />
        </div>
      </div>
    </div>
  );
}
