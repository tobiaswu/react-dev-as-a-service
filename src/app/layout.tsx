import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Tobias Wupperfeld | Software Engineering',
  description:
    'Tobias Wupperfeld is a Senior React TypeScript Developer ready to support your project ✓ modern web applications ✓ talk to experts ✓ get in touch now',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
