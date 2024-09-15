import React from 'react';
import { Project } from '../lib/types';
import bookingImage from '@/app/images/booking-app-light.png';
import bookingImageDark from '@/app/images/booking-app-dark.png';
import wildOasis from '@/app/images/wild-oasis-web.png';
import ProjectCard from './ProjectCard';
import f1Blog from '@/app/images/f1blog.png';
import portfolio from '@/app/images/portfolio.png';
import portfolioDark from '@/app/images/portfolio-dark.png';
import homequest from '@/app/images/homequest.png';
const projects: Project[] = [
  {
    title: 'Reservation management app',
    description:
      'Cabin reservation management application built for employees of the resort to manage reservations, cabins, prices and more.',
    technologies: ['react', 'js', 'supabase', 'reactquery'],
    image: bookingImage,
    imageDark: bookingImageDark,
    link: 'https://cabins-booking-app.vercel.app',
    hasDarkMode: true,
  },
  {
    title: 'The wild oasis',
    description:
      'This app is designed to allow users to explore and book cabins easily. Offers a seamless and interactive experience for making cabin reservations',
    technologies: ['next', 'supabase', 'tailwind'],
    image: wildOasis,
    link: 'https://cabins-booking-app-website.vercel.app/',
  },
  {
    title: 'F1 themed blog',
    description:
      'My F1 Blog" is a dynamic and engaging web application designed to provide Formula One enthusiasts platform to share their thoughts, insights, and experiences.',
    technologies: ['mongodb', 'express', 'react', 'nodejs'],
    image: f1Blog,
    link: '/',
  },
  {
    title: 'Portfolio',
    description: 'Personal portfolio site.',
    technologies: ['next', 'tailwind'],
    image: portfolio,
    imageDark: portfolioDark,
    link: '/',
    hasDarkMode: true,
  },
  {
    title: '[In Progress] Home Quest',
    description:
      'HomeQuest is an advanced real estate platform designed to streamline the process of buying, selling, and renting properties.',
    technologies: ['next', 'tailwind', 'prisma', 'postgres', 'firebase'],
    image: homequest,
    link: '/',
    inProgress: true,
  },
];

export default function ProjectsGird() {
  return (
    <div className="grid w-full grid-cols-1 gap-8 py-10 sm:grid-cols-2 md:grid-cols-3 lg:gap-16 dark:text-gray-100">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
