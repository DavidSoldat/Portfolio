import { Metadata } from 'next';
import ProjectsGird from '../components/ProjectsGird';

export const metadata: Metadata = {
  title: '<MyProjects />',
};

export default function Projects() {
  return (
    <div className="w-full animate-blur-to-normal px-6 py-10">
      <ProjectsGird />
    </div>
  );
}
