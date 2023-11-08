import { Footer } from '@/components/Footer/Footer';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@/util/GoogleAnalytics';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tobias Wupperfeld | Software Engineering | React Developer',
  description:
    'Tobias Wupperfeld is a Senior React TypeScript Developer ready to support your project ✓ modern web applications ✓ talk to an expert ✓ get in touch now',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <GoogleAnalytics />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
