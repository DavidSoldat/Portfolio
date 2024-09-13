import { StaticImageData } from 'next/image';

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string | StaticImageData;
  imageDark?: string | StaticImageData;
  link: string;
  hasDarkMode?: boolean;
};

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
