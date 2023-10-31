import Link from 'next/link';
import { NavButton } from './NavButton/NavButton';
import { Pages } from '../../types';

interface NavigationProps {
  page: string;
}

const navMap: Record<string, string[]> = {
  home: [Pages.portfolio, Pages.services],
  portfolio: [Pages.home, Pages.services],
  services: [Pages.home, Pages.portfolio],
  privacy: [Pages.home, Pages.portfolio, Pages.services],
};

const capitalizeFirstLetter = (txt: string) => {
  return txt.charAt(0).toUpperCase() + txt.slice(1);
};

export const Navigation = ({ page }: NavigationProps) => {
  const links = navMap[page] || [];

  return (
    <header className="w-full h-16 pr-4 pt-4 flex justify-end fixed z-50">
      <div className="">
        {links.map((link) => (
          <Link key={link} href={link === Pages.home ? '/' : `/${link}`}>
            <NavButton title={capitalizeFirstLetter(link)} />
          </Link>
        ))}
      </div>
    </header>
  );
};
