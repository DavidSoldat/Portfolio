'use client';
import { useState } from 'react';
import { projects } from '../lib/data';
import dynamic from 'next/dynamic';

const ProjectCard = dynamic(() => import('./ProjectCard'), {
  loading: () => <div className="h-96 animate-pulse rounded-xl bg-gray-800" />,
});

export default function EnhancedProjectsGrid() {
  const [filter, setFilter] = useState('all');

  const categories = [
    'all',
    ...Array.from(new Set(projects.map((p) => p.category))).filter(
      (category): category is string => category !== undefined,
    ),
  ];
  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen w-full p-6 text-white">
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              filter === cat
                ? 'bg-purple-500 text-white shadow-md shadow-purple-500/50'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
