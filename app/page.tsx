import { Zap } from 'lucide-react';
import Link from 'next/link';
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from 'react-icons/ri';
import { SiF1 } from 'react-icons/si';

export default function Home() {
  return (
    <div className="flex w-full animate-blur-to-normal flex-col items-center gap-16 px-6 py-10 md:flex-row md:gap-0">
      <div className="flex items-center md:w-2/5">
        <h2 className="flex items-center gap-2 text-5xl font-bold tracking-wide">
          Dav
          <Zap
            fill="#fde047"
            color="#facc15"
            size={50}
            style={{
              animation: 'pulseGlow 1.5s infinite',
            }}
          />
          d
        </h2>
      </div>
      <div className="flex items-center md:w-3/5">
        <div className="text-justify text-2xl md:leading-relaxed md:tracking-wide">
          Hey there, welcome! 👋🏼 I&apos;m David, a software engineer with
          passion for web development. I specialize in crafting seamless user
          experiences using{' '}
          <span>
            <RiReactjsFill className="inline-block text-gray-600 dark:text-purple-300" />{' '}
          </span>
          React.js,{' '}
          <span>
            <RiNextjsFill className="inline text-gray-600 dark:text-purple-300" />
          </span>{' '}
          Next.js,{' '}
          <span>
            <RiJavascriptFill className="inline-block text-gray-600 dark:text-purple-300" />{' '}
          </span>
          JavaScript,{' '}
          <span>
            <BiLogoTypescript className="inline-block text-gray-600 dark:text-purple-300" />{' '}
          </span>
          TypeScript,{' '}
          <span>
            <BiLogoPostgresql className="inline-block text-gray-600 dark:text-purple-300" />{' '}
          </span>
          PostgreSQL and{' '}
          <span>
            <RiTailwindCssFill className="inline-block text-gray-600 dark:text-purple-300" />{' '}
          </span>
          TailwindCSS among other modern technologies. When I&apos;m not coding,
          you might find me watching{' '}
          <span>
            <SiF1
              className="inline-block text-gray-600 dark:text-purple-300"
              size={40}
            />{' '}
          </span>{' '}
          or binging on a TV show. Based in Banja Luka{' '}
          <div className="group relative inline">
            <span className="text-gray-600 dark:text-purple-300">(.ba)</span>
            <div className="absolute bottom-10 left-0 hidden w-48 rounded-lg bg-gray-800 p-2 text-sm text-purple-100 shadow-lg group-hover:block">
              Bosnia and Herzegovina
            </div>
          </div>{' '}
          I&apos;m always open to connecting, feel free to reach out to me via
          the links below or in{' '}
          <Link
            className="hover-underline text-gray-600 decoration-current dark:text-purple-300"
            href="/contact"
          >
            Contact section.
          </Link>
        </div>
      </div>
    </div>
  );
}
