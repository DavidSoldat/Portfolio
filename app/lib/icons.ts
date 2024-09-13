import { BiLogoTypescript } from 'react-icons/bi';
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiReactjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from 'react-icons/ri';
import { SiReactquery } from 'react-icons/si';

const technologyIcons: {
  [key: string]: [React.ComponentType<React.SVGProps<SVGSVGElement>>, string];
} = {
  react: [RiReactjsFill, 'text-blue-500'],
  next: [RiNextjsFill, 'text-black dark:text-purple-100'],
  js: [RiJavascriptFill, 'text-yellow-500'],
  ts: [BiLogoTypescript, 'text-blue-500'],
  tailwind: [RiTailwindCssFill, 'text-teal-500'],
  supabase: [RiSupabaseFill, 'text-green-500'],
  reactquery: [SiReactquery, 'text-red-500'],
};

export default technologyIcons;
