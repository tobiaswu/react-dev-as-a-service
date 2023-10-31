import Image from 'next/image';
import Link from 'next/link';

export interface FlipCardProps {
  source: string;
  title: string;
  subTitle: string;
  description: string;
  btnText: string;
  btnLink: string;
}

export const FlipCard = ({
  source,
  title,
  subTitle,
  description,
  btnText,
  btnLink,
}: FlipCardProps) => {
  return (
    <div
      key={source}
      className="group h-96 [perspective:1000px] animate-slide-up"
    >
      <div className="relative h-full w-full rounded-lg shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 bg-white rounded-lg">
          <Image
            className="rounded-lg object-cover object-left-top shadow-md shadow-black/10"
            src={`/img/${source}`}
            alt={description}
            loading='lazy'
            fill
          />
        </div>
        <div className="absolute inset-0 h-full w-full rounded-lg bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-lg">{subTitle}</p>
            <p className="text-base">{description}</p>
            <Link href={btnLink}>
              <button className="mt-4 rounded-md bg-palatinate_blue-300 py-1 px-2 text-sm hover:bg-palatinate_blue-200">
                {btnText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
