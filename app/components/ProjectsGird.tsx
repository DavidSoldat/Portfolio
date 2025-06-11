import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../lib/data';

export default function ProjectsGird() {
  return (
    <div className="hide-scrollbar flex w-full flex-col items-stretch gap-10 py-10 md:flex-row md:overflow-x-scroll dark:text-gray-100">
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
}
