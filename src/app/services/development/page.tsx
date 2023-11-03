import { Navigation } from '@/components/Navigation/Navigation';
import { Pages } from '@/types';
import AnimateOnScroll from '@/util/AnimateOnScroll';
import Image from 'next/image';
import Link from 'next/link';

export default function Development() {
  return (
    <div>
      <Navigation page={Pages.services} />
      <div className="container mx-auto pb-40 px-4">
        <AnimateOnScroll>
          <h1 className="pt-32 pb-24 text-5xl font-bold bg-gradient-to-r from-azure to-palatinate_blue-400 text-transparent bg-clip-text">
            Web App Development
          </h1>
        </AnimateOnScroll>

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
        <p className="font-semibold text-xl mt-8 mb-4 text-azure-400">
          What you can anticipate from my service:
        </p>
        <ol className="list-decimal pl-4 text-lg">
          <li className="mb-2">
            <h3 className="font-semibold text-palatinate_blue">Expertise:</h3>
            <p>
              I bring years of expertise in web app development to the table,
              providing you with top-notch guidance and delivering solutions
              that lead the industry.
            </p>
          </li>
          <li className="mb-2">
            <h3 className="font-semibold text-palatinate_blue">
              Tailored Solutions:
            </h3>
            <p>
              I understand that your project is unique, and I actively listen to
              your requirements. I&apos;ll develop a customized strategy that
              sets your web app apart from the competition, ensuring it meets
              your precise needs.
            </p>
          </li>
          <li className="mb-2">
            <h3 className="font-semibold text-palatinate_blue">
              Results-Driven Approach:
            </h3>
            <p>
              Your success is my primary focus. I offer actionable insights and
              recommendations to improve performance and enhance user
              engagement, ensuring your web app stands out.
            </p>
          </li>
          <li className="mb-2">
            <h3 className="font-semibold text-palatinate_blue">
              Maximizing ROI:
            </h3>
            <p>
              I assess your objectives and budget, empowering you to make
              informed decisions that optimize your investment.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-palatinate_blue">
              Confidentiality:
            </h3>
            <p>
              Your project&apos;s details are treated with the utmost discretion
              and confidentiality. I respect the sensitive nature of your ideas
              and information.
            </p>
          </li>
        </ol>
        <p className="text-xl my-12">
          Ready to make your web app dreams a reality? Contact me today to
          schedule a consultation and embark on a journey to bring your vision
          to life!
        </p>

        <h2 className="uppercase font-semibold mb-8 text-xl text-slate-500">
          What&apos;s included
        </h2>
        <ul className="text-lg pl-4">
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

        <div className="my-16 py-16 px-8 border-2 rounded-xl shadow-sm bg-[url(/img/blob-intro.svg)] bg-no-repeat bg-top bg-white/60">
          <h2 className="font-semibold text-4xl">Work with me</h2>
          <Link href="/#contact">
            <button className="flex gap-2 px-8 py-4 bg-palatinate_blue rounded-full mt-8 hover:bg-palatinate_blue-400 text-lg font-bold text-white tracking-wider transition duration-300">
              <Image
                src="/icons/arrow-right.svg"
                alt="contact icon"
                width="24"
                height="24"
              />
              <p className="">Request to book</p>
            </button>
          </Link>
        </div>

        <h2 className="uppercase font-semibold mt-16 mb-8 text-xl text-slate-500">
          More services
        </h2>
        <div className="bg-white/60 rounded-xl border-2 flex justify-between items-center bg-[url(/img/blob-portfolio.svg)] bg-cover bg-top shadow-sm">
          <Link href="/services/consultation">
            <p className="text-lg font-semibold py-8 pl-8">
              Business App Consultation
            </p>
          </Link>
          <Link className="flex gap-2 pl-8" href="/#contact">
            <Image
              src="/icons/arrow-right.svg"
              alt="contact icon"
              width="24"
              height="24"
            />
            <p className="font-semibold py-8 pr-8">Contact for pricing</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
