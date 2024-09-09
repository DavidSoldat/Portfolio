import AnimatedBackground from '@/app/components/Background';
import type { Metadata } from 'next';
import Navigation from './components/Navigation';
import './globals.css';
import { Space_Grotesk } from 'next/font/google';

export const metadata: Metadata = {
  title: 'David Soldat',
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
    <html lang='en' className='h-[100vh]'>
      <body className={`antialiased h-full ${space.className}`}>
        <AnimatedBackground />
        <div className='relative z-10 max-w-7xl mx-auto animate-blur-to-normal'>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
