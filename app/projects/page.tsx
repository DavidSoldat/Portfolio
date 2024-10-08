import { Metadata } from 'next';
import ProjectsGird from '../components/ProjectsGird';

export const metadata: Metadata = {
  title: '<MyProjects />',
};

export default function Projects() {
  return (
    <div className="w-full animate-blur-to-normal px-6 py-10">
      <h1 className="pb-10 text-center text-2xl font-semibold sm:text-3xl lg:text-4xl">
        projects
      </h1>
      <ProjectsGird />
    </div>
  );
}
