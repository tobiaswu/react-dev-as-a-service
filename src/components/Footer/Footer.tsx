import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full h-16 p-4 bg-english_violet flex justify-center items-center">
      <p className="text-english_violet-800 mr-4">
        Copyright © 2023 TW Software Solutions LLC. All Rights Reserved.
      </p>
      <Link href="/privacy">
        <p className="text-english_violet-800 underline hover:text-white transition duration-300">
          Privacy
        </p>
      </Link>
    </footer>
  );
};
