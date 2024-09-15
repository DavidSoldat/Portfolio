import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from 'react-icons/ri';
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiPrisma,
  SiReactquery,
} from 'react-icons/si';

const technologyIcons: {
  [key: string]: [React.ComponentType<React.SVGProps<SVGSVGElement>>, string];
} = {
  react: [RiReactjsFill, 'text-blue-500'],
  next: [RiNextjsFill, 'text-black dark:text-purple-100'],
  js: [RiJavascriptFill, 'text-yellow-500'],
  ts: [BiLogoTypescript, 'text-blue-500'],
  tailwind: [RiTailwindCssFill, 'text-teal-500'],
  supabase: [RiSupabaseFill, 'text-green-500'],
  express: [SiExpress, 'text-black dark:text-purple-100'],
  mongodb: [SiMongodb, 'text-green-700'],
  nodejs: [RiNodejsFill, 'text-green-700'],
  reactquery: [SiReactquery, 'text-red-500'],
  prisma: [SiPrisma, 'text-black dark:text-purple-100'],
  postgres: [BiLogoPostgresql, 'text-sky-800 dark:text-purple-100'],
  firebase: [SiFirebase, 'text-red-500'],
};

export default technologyIcons;
