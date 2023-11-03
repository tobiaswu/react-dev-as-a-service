import { Navigation } from '@/components/Navigation/Navigation';
import { PageHeading } from '@/components/PageHeading/PageHeading';
import { ServiceNavigationCard } from '@/components/ServiceNavigationCard/ServiceNavigationCard';
import { ServiceRequestCard } from '@/components/ServiceRequestCard/ServiceRequestCard';
import { Pages } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tobias Wupperfeld | Web App Development | React TypeScript',
  description:
    'Tobias Wupperfelds web app development service, tailored solutions ✓ results driven ✓ full stack ✓ ui ux design ✓ agile methods ✓ get in touch now',
};

export default function Development() {
  return (
    <div>
      <Navigation page={Pages.services} />
      <div className="container mx-auto pb-40 px-4">
        <PageHeading title="Web App Development" />

        <h2 className="uppercase font-semibold mb-8 text-xl text-slate-500">
          About this service
        </h2>
        <p className="text-lg">
          Are you ready to transform your web app idea into a fully functional
          reality? I offer top-tier web app development services that combine
          the latest technologies and industry best practices to ensure your
          project&apos;s success. With my extensive experience in the world of
          web app development, I&apos;m here to guide you through every step of
          the process, making sure your vision not only comes to life but also
          excels beyond your expectations.
        </p>
        <h3 className="font-semibold text-xl mt-8 mb-4 text-azure-400">
          What you can anticipate from my service:
        </h3>
        <ol className="list-decimal pl-4 text-lg">
          <li className="mb-2">
            <h4 className="font-semibold text-palatinate_blue">Expertise:</h4>
            <p>
              I bring years of expertise in web app development to the table,
              providing you with top-notch guidance and delivering solutions
              that lead the industry.
            </p>
          </li>
          <li className="mb-2">
            <h4 className="font-semibold text-palatinate_blue">
              Tailored Solutions:
            </h4>
            <p>
              I understand that your project is unique, and I actively listen to
              your requirements. I&apos;ll develop a customized strategy that
              sets your web app apart from the competition, ensuring it meets
              your precise needs.
            </p>
          </li>
          <li className="mb-2">
            <h4 className="font-semibold text-palatinate_blue">
              Results-Driven Approach:
            </h4>
            <p>
              Your success is my primary focus. I offer actionable insights and
              recommendations to improve performance and enhance user
              engagement, ensuring your web app stands out.
            </p>
          </li>
          <li className="mb-2">
            <h4 className="font-semibold text-palatinate_blue">
              Maximizing ROI:
            </h4>
            <p>
              I assess your objectives and budget, empowering you to make
              informed decisions that optimize your investment.
            </p>
          </li>
          <li>
            <h4 className="font-semibold text-palatinate_blue">
              Confidentiality:
            </h4>
            <p>
              Your project&apos;s details are treated with the utmost discretion
              and confidentiality. I respect the sensitive nature of your ideas
              and information.
            </p>
          </li>
        </ol>

        <h3 className="font-semibold text-xl mt-8 mb-4 text-azure-400">
          What sets me apart:
        </h3>
        <ul className="text-lg mb-16 pl-4">
          <li className="mb-2">
            Deep expertise in typesafe React app development: I have a deep
            understanding of typesafe React app development, which allows me to
            build high-quality, scalable apps that are easy to maintain.
          </li>
          <li className="mb-2">
            Always up-to-date with current trends: I am constantly researching
            new products, tools, and technologies, especially AI tools, so that
            I can integrate them into your app and make suggestions to maximize
            your ROI.
          </li>
          <li className="mb-2">
            Strong eye for UI and UX design: I have a strong eye for UI and UX
            design, and I can take the user&apos;s perspective to better
            understand how they are using your app and make enhancements.
          </li>
          <li className="mb-2">
            Online marketing expertise: I started learning about online
            marketing during my student days, and I now have a solid
            understanding of how to market online businesses. This includes how
            to get traffic to your app with SEO, paid traffic, social media, and
            alternative tactics, as well as how to convert visitors into users.
          </li>
          <li>
            Prussian work ethic: I was raised with traditional German values,
            including precision and diligence. I am committed to delivering
            high-quality work on time and within budget.
          </li>
        </ul>

        <h2 className="uppercase font-semibold mb-8 text-xl text-slate-500">
          What&apos;s included
        </h2>
        <ul className="text-lg pl-4 mb-16">
          <li className="mb-2">
            <h3 className="font-semibold text-palatinate_blue">
              Frontend Development
            </h3>
            <p>
              The development of the frontend. I&apos;m proficient with the
              following technologies but I&apos;m open to adapting to your tech
              stack: - Modern JavaScript and TypeScript - Single-page
              applications built within the React ecosystem - Styling: plain
              CSS, TailwindCSS, CSS-in-JS, Styled-Components, MaterialUI -
              Testing: Jest, React-Testing-Library, Cypress - Web performance
              optimization: server-side rendering, lazy loading, memoization -
              Frameworks: NextJS, Vite, Create-React-App
            </p>
          </li>
          <li className="mb-2">
            <h3 className="font-semibold text-palatinate_blue">
              Backend Development
            </h3>
            <p>
              The development of the backend. I&apos;m proficient with the
              following technologies but I&apos;m open to adapting to your tech
              stack: - NodeJS web servers: NestJS - Microservice architecture:
              Python - APIs: REST & GraphQL - Cloud providers: AWS, Vercel -
              Infrastructure: Docker, Kubernetes, Terraform - Databases:
              PostgreSQL - BaaS: Supabase - CI/CD: Gitlab pipelines - Misc:
              CubeJS, Superset
            </p>
          </li>
          <li className="mb-2">
            <h3 className="font-semibold text-palatinate_blue">
              UI & UX Responsive Designs
            </h3>
            <p>
              I have an eye for good design and can create beautiful mockups
              always with usability in mind and optimized for mobile devices.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-palatinate_blue">
              Agile Methods
            </h3>
            <p>I&apos;m used to work in teams utilizing SCRUM.</p>
          </li>
        </ul>

        <ServiceRequestCard />

        <h2 className="uppercase font-semibold mt-16 mb-8 text-xl text-slate-500">
          More services
        </h2>
        <ServiceNavigationCard
          name="Business App Consultation"
          slug="/services/consultation"
        />
      </div>
    </div>
  );
}
