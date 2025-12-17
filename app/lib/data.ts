import bookingImageDark from '@/app/images/booking-app-dark.png';
import bookingImage from '@/app/images/booking-app-light.png';
import f1Blog from '@/app/images/f1blog.png';
import homequest from '@/app/images/homequest.png';
import portfolioDark from '@/app/images/portfolio-dark.png';
import portfolio from '@/app/images/portfolio.png';
import velura from '@/app/images/velura.png';
import wildOasis from '@/app/images/wild-oasis-web.png';
import datalytics from '@/app/images/datalytics.png';
import { Project } from './types';

export const projects: Project[] = [
  {
    title: '[In Progress] Datalytics',
    description:
      'A modern data analytics platform that transforms CSV and Excel files into actionable insights. Upload datasets, get instant column statistics, visualize data with interactive charts, and manage your analytics all in one place. Built with Next.js, Spring Boot, and PostgreSQL.',
    technologies: ['next', 'springBoot', 'postgres', 'tailwind', 'ts', 'java'],
    image: datalytics,
    link: 'https://github.com/DavidSoldat/DataAnalyticsApp/',
    inProgress: true,
    category: 'Full-stack',
  },
  {
    title: '[In Progress] Home Quest',
    description:
      'HomeQuest is a full-stack real estate platform designed to streamline the process of buying, selling and renting properties. This project demonstrates my ability to build scalable, full-stack applications with modern technologies while delivering a seamless user experience',
    technologies: ['next', 'tailwind', 'prisma', 'postgres', 'firebase'],
    image: homequest,
    link: 'https://home-quest-eta.vercel.app/',
    inProgress: true,
    category: 'Full-stack',
  },
  {
    title: '[In Progress] Velura.Co',
    description:
      'Velura.co is a sleek, full-stack e-commerce platform offering a curated selection of luxury clothing. Implemented secure user authentication and authorization using JWT (JSON Web Token). Utilized Axios for seamless communication between the frontend and backend.',
    technologies: ['react', 'springBoot', 'postgres', 'ts', 'java', 'tailwind'],
    image: velura,
    link: 'https://github.com/DavidSoldat/eCommerce-store',
    inProgress: true,
    category: 'Full-stack',
  },
  {
    title: 'Reservation management app',
    description:
      'A comprehensive cabin booking application designed for employees to manage cabins and reservations efficiently. Manage reservations by checking guests in/out, updating bookings, and viewing reservation details. Authentication & Authorization:  Secure employee access with login functionality; only authenticated users can manage cabins and reservations',
    technologies: ['react', 'js', 'supabase', 'postgres', 'reactquery'],
    image: bookingImage,
    imageDark: bookingImageDark,
    link: 'https://cabins-booking-app.vercel.app',
    hasDarkMode: true,
    category: 'Full-stack',
  },
  {
    title: 'The wild oasis',
    description:
      'A user-friendly cabin booking application designed to allow users to explore and book cabins effortlessly. Users can browse cabins, check availability, and make reservations with ease. Connected to the resort’s internal booking system, ensuring real-time updates on cabin availability and reservations.',
    technologies: ['next', 'supabase', 'postgres', 'tailwind'],
    image: wildOasis,
    link: 'https://cabins-booking-app-website.vercel.app/',
    category: 'Website',
  },
  {
    title: 'F1 themed blog',
    description:
      'My F1 Blog" is a dynamic and engaging web blog designed to provide Formula One enthusiasts platform to share their thoughts, insights, and experiences.',
    technologies: ['mongodb', 'express', 'react', 'nodejs'],
    image: f1Blog,
    link: '/',
    category: 'Full-stack',
  },
  {
    title: 'Portfolio',
    description:
      'Personal portfolio site, where you can contact me or see more about me.',
    technologies: ['next', 'tailwind', 'ts'],
    image: portfolio,
    imageDark: portfolioDark,
    link: '/',
    hasDarkMode: true,
    category: 'Website',
  },
];
