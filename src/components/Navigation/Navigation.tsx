'use client';

import Link from 'next/link';
import { NavButton } from './NavButton/NavButton';
import { Pages } from '../../types';
import Image from 'next/image';
import { useState } from 'react';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full h-16 pr-4 pt-4 justify-end fixed z-50 sm:flex hidden">
        <div>
          {links.map((link) => (
            <Link key={link} href={link === Pages.home ? '/' : `/${link}`}>
              <NavButton title={capitalizeFirstLetter(link)} />
            </Link>
          ))}
        </div>
      </header>

      <button
        className="sm:hidden fixed top-4 right-4 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <Image
            src="/icons/close-square.svg"
            alt="close menu icon"
            title="Close menu"
            width="40"
            height="40"
          />
        ) : (
          <Image
            src="/icons/menu-navigation-grid.svg"
            alt="tile menu icon"
            title="Open menu"
            width="40"
            height="40"
          />
        )}
      </button>
      <div
        className={`${
          isMenuOpen ? 'w-full' : 'w-0'
        } fixed bg-english_violet-300/90 overflow-hidden h-screen text-slate-100 flex justify-center items-center text-4xl z-40 font-semibold tracking-wider origin-left duration-500`}
      >
        <ul className="list-none">
          {links.map((link) => (
            <li key={link} className="mb-4 duration-300 hover:-translate-y-1">
              <Link href={link === Pages.home ? '/' : `/${link}`}>
                {capitalizeFirstLetter(link)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
