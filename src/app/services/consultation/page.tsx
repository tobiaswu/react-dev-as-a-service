import { Navigation } from '@/components/Navigation/Navigation';
import { PageHeading } from '@/components/PageHeading/PageHeading';
import { ServiceNavigationCard } from '@/components/ServiceNavigationCard/ServiceNavigationCard';
import { ServiceRequestCard } from '@/components/ServiceRequestCard/ServiceRequestCard';
import { Pages } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tobias Wupperfeld | Business App Consultation | React',
  description:
    'Tobias Wupperfelds business app consultation service, tailored solutions ✓ discovery call ✓ transparent project planning ✓ cost estimation ✓ get in touch now',
};

export default function Consultation() {
  return (
    <div>
      <Navigation page={Pages.services} />
      <div className="container mx-auto pb-40 px-4">
        <PageHeading title="Business App Consultation" />

        <h2 className="uppercase font-semibold mb-8 text-xl text-slate-500">
          About this service
        </h2>
        <p className="text-lg">
          Ready to turn your web app vision into a reality? I&apos;m here to
          provide you with exceptional consultation services that will pave the
          way for your success. With my extensive expertise in web app
          development, I can guide you through every step of the process,
          ensuring that your project not only meets but exceeds your
          expectations.
        </p>
        <h3 className="font-semibold text-xl mt-8 mb-4 text-azure-400">
          What you can expect:
        </h3>
        <ol className="list-decimal pl-4 text-lg">
          <li className="mb-2">
            <h4 className="font-semibold text-palatinate_blue">Expertise:</h4>
            <p>
              With years of experience in web app development, I provide expert
              guidance and deliver industry-leading solutions.
            </p>
          </li>
          <li className="mb-2">
            <h4 className="font-semibold text-palatinate_blue">
              Tailored Solutions:
            </h4>
            <p>
              Your project is unique, and I&apos;ll listen to your needs,
              crafting a customized strategy that sets your web app apart from
              the rest.
            </p>
          </li>
          <li className="mb-2">
            <h4 className="font-semibold text-palatinate_blue">
              Results-Driven:
            </h4>
            <p>
              Your success is my top priority, and I offer actionable insights
              to enhance performance and boost user engagement.
            </p>
          </li>
          <li className="mb-2">
            <h4 className="font-semibold text-palatinate_blue">
              Maximizing ROI:
            </h4>
            <p>
              I carefully analyze your goals and budget, helping you make
              well-informed decisions that optimize your investment.
            </p>
          </li>
          <li>
            <h4 className="font-semibold text-palatinate_blue">
              Confidentiality:
            </h4>
            <p>
              Your project details are handled with the utmost discretion and
              confidentiality.
            </p>
          </li>
        </ol>
        <p className="text-xl my-12">
          Book your consultation now and let&apos;s work together to turn your
          vision into a reality!
        </p>

        <h2 className="uppercase font-semibold mb-8 text-xl text-slate-500">
          What&apos;s included
        </h2>
        <ul className="text-lg pl-4 mb-16">
          <li className="mb-2">
            <h3 className="font-semibold text-palatinate_blue">
              Discovery Call
            </h3>
            <p>
              We delve deep into your unique requirements, aspirations, and
              goals, ensuring a thorough understanding of your precise needs.
              This important stage serves as the foundation for creating a web
              application that perfectly aligns with your vision and objectives,
              right from the very beginning. In close collaboration with you, I
              chart the course of your web application, defining key milestones
              along the way. My commitment to transparent and open communication
              guarantees that you are an active participant in the process, and
              your valuable insights play a central role in shaping the
              development journey.
            </p>
          </li>
          <li className="mb-2">
            <h3 className="font-semibold text-palatinate_blue">
              Project Planning
            </h3>
            <p>
              My project planning process is characterized by a clear and
              concise action plan crafted to pave the way for your
              project&apos;s success.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-palatinate_blue">
              Cost Estimation
            </h3>
            <p>
              Based on the project specifics, I provide you with a comprehensive
              estimation of the total development costs, ensuring complete
              transparency in my financial projections.
            </p>
          </li>
        </ul>

        <ServiceRequestCard />

        <h2 className="uppercase font-semibold mt-16 mb-8 text-xl text-slate-500">
          More services
        </h2>
        <ServiceNavigationCard
          name="Web App Development"
          slug="/services/development"
        />
      </div>
    </div>
  );
}
