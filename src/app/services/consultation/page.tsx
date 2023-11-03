import { Navigation } from '@/components/Navigation/Navigation';
import { Pages } from '@/types';
import AnimateOnScroll from '@/util/AnimateOnScroll';
import Image from 'next/image';
import Link from 'next/link';

export default function Consultation() {
  return (
    <div>
      <Navigation page={Pages.services} />
      <div className="container mx-auto pb-40 px-4">
        <AnimateOnScroll>
          <h1 className="pt-32 pb-24 text-5xl font-bold bg-gradient-to-r from-azure to-palatinate_blue-400 text-transparent bg-clip-text">
            Business App Consultation
          </h1>
        </AnimateOnScroll>

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
        <p className="font-semibold text-xl mt-8 mb-4 text-azure-400">
          What you can expect:
        </p>
        <ol className="list-decimal pl-4 text-lg">
          <li className="mb-2">
            <h3 className="font-semibold text-palatinate_blue">Expertise:</h3>
            <p>
              With years of experience in web app development, I provide expert
              guidance and deliver industry-leading solutions.
            </p>
          </li>
          <li className="mb-2">
            <h3 className="font-semibold text-palatinate_blue">
              Tailored Solutions:
            </h3>
            <p>
              Your project is unique, and I&apos;ll listen to your needs,
              crafting a customized strategy that sets your web app apart from
              the rest.
            </p>
          </li>
          <li className="mb-2">
            <h3 className="font-semibold text-palatinate_blue">
              Results-Driven:
            </h3>
            <p>
              Your success is my top priority, and I offer actionable insights
              to enhance performance and boost user engagement.
            </p>
          </li>
          <li className="mb-2">
            <h3 className="font-semibold text-palatinate_blue">
              Maximizing ROI:
            </h3>
            <p>
              I carefully analyze your goals and budget, helping you make
              well-informed decisions that optimize your investment.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-palatinate_blue">
              Confidentiality:
            </h3>
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
        <ul className="text-lg pl-4">
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
          <Link href="/services/development">
            <p className="text-lg font-semibold py-8 pl-8">
              Web App Development
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
