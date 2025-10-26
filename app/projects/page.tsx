import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ProjectsGrid = dynamic(() => import('../components/ProjectsGird'), {
  loading: () => (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-96 animate-pulse rounded-xl bg-gray-800" />
      ))}
    </div>
  ),
});

export const metadata: Metadata = {
  title: '<MyProjects />',
};

export default function Projects() {
  return (
    <div className="w-full animate-blur-to-normal px-6 py-10">
      <ProjectsGrid />
    </div>
  );
}
