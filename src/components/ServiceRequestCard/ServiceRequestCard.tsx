import Image from 'next/image';
import Link from 'next/link';

export const ServiceRequestCard = () => {
  return (
    <div className="py-16 px-8 border-2 rounded-xl shadow-sm bg-[url(/img/blob-intro.svg)] bg-no-repeat bg-top bg-white/60">
      <h2 className="font-semibold text-4xl">Work with me</h2>
      <Link href="/#contact">
        <button className="flex gap-2 px-8 py-4 bg-palatinate_blue rounded-full mt-8 hover:bg-palatinate_blue-400 text-lg font-bold text-white tracking-wider transition duration-300">
          <Image
            src="/icons/arrow-right-white.svg"
            alt="contact icon"
            width="24"
            height="24"
            loading="lazy"
          />
          <p className="">Request to book</p>
        </button>
      </Link>
    </div>
  );
};
