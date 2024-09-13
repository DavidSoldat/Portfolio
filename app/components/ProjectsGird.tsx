import React from 'react';
import { Project } from '../lib/types';
import bookingImage from '@/app/images/booking-app-light.png';
import bookingImageDark from '@/app/images/booking-app-dark.png';
import wildOasis from '@/app/images/wild-oasis-web.png';
import ProjectCard from './ProjectCard';

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
    link: 'https://my-ecommerce-app.com',
  },
  {
    title: 'Gas Delivery App',
    description:
      'A location-based gas delivery service app, allowing users to place orders and track deliveries.',
    technologies: ['Next.js', 'Vercel Postgres', 'Stripe', 'MapBox'],
    image: bookingImage,
    imageDark: bookingImageDark,
    link: 'https://my-gas-delivery-app.com',
  },
  {
    title: 'Real Estate Listings Platform',
    description:
      'A platform to browse, search, and list real estate properties with detailed information and images.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    image: bookingImage,
    imageDark: bookingImageDark,
    link: 'https://homequest.com',
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
