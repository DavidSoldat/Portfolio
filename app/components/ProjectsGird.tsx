import React from 'react';
import { Project } from '../lib/types';
import bookingImage from '@/app/images/booking-app-light.png';
import bookingImageDark from '@/app/images/booking-app-dark.png';
import wildOasis from '@/app/images/wild-oasis-web.png';
import ProjectCard from './ProjectCard';
import f1Blog from '@/app/images/f1blog.png';
import portfolio from '@/app/images/portfolio.png';
import portfolioDark from '@/app/images/portfolio-dark.png';
import velura from '@/app/images/velura.png';
import homequest from '@/app/images/homequest.png';
const projects: Project[] = [
  {
    title: '[In Progress] Home Quest',
    description:
      'HomeQuest is a full-stack real estate platform designed to streamline the process of buying, selling and renting properties. This project demonstrates my ability to build scalable, full-stack applications with modern technologies while delivering a seamless user experience',
    technologies: ['next', 'tailwind', 'prisma', 'postgres', 'firebase'],
    image: homequest,
    link: 'https://home-quest-eta.vercel.app/',
    inProgress: true,
  },
  {
    title: '[In Progress] Velura.Co',
    description:
      'Velura.co is a sleek, full-stack e-commerce platform offering a curated selection of luxury clothing. Implemented secure user authentication and authorization using JWT (JSON Web Tokens). Utilized Axios for seamless communication between the frontend and backend.',
    technologies: ['react', 'tailwind', 'ts', 'springBoot', 'postgres', 'java'],
    image: velura,
    link: '/',
    inProgress: true,
  },
  {
    title: 'Reservation management app',
    description:
      'A comprehensive cabin booking application designed for employees to manage cabins and reservations efficiently. Manage reservations by checking guests in/out, updating bookings, and viewing reservation details. Authentication & Authorization:  Secure employee access with login functionality; only authenticated users can manage cabins and reservations',
    technologies: ['react', 'js', 'supabase', 'reactquery'],
    image: bookingImage,
    imageDark: bookingImageDark,
    link: 'https://cabins-booking-app.vercel.app',
    hasDarkMode: true,
  },
  {
    title: 'The wild oasis',
    description:
      'A user-friendly cabin booking application designed to allow users to explore and book cabins effortlessly. Users can browse cabins, check availability, and make reservations with ease. Connected to the resort’s internal booking system, ensuring real-time updates on cabin availability and reservations.',
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
    technologies: ['next', 'tailwind', 'ts'],
    image: portfolio,
    imageDark: portfolioDark,
    link: '/',
    hasDarkMode: true,
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
