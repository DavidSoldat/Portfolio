import AnimatedBackground from '@/app/components/Background';
import type { Metadata } from 'next';
import Navigation from './components/Navigation';
import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: '<David/>',
  description: 'Portfolio David Soldat',
};

const space = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen antialiased ${space.className}`}>
        <div className="relative min-h-screen">
          <AnimatedBackground />
          <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl animate-blur-to-normal flex-col">
            <Navigation />

            <div className="flex flex-grow text-gray-900 dark:text-violet-100">
              {children}
            </div>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
