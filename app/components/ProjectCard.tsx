'use client';

import { useEffect, useState } from 'react';
import { Project } from '../lib/types';
import Image from 'next/image';
import { RxOpenInNewWindow } from 'react-icons/rx';
import Link from 'next/link';
import technologyIcons from '../lib/icons';

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateDarkMode = () => {
      const darkMode = document.documentElement.classList.contains('dark');
      setIsDarkMode(darkMode);
    };

    updateDarkMode();

    const observer = new MutationObserver(() => {
      updateDarkMode();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const imageSrc = project.hasDarkMode
    ? isDarkMode && project.imageDark
      ? project.imageDark
      : project.image
    : project.image;

  const renderTechnologyIcons = () => {
    return project.technologies.map((tech) => {
      const [IconComponent, iconStyle] =
        technologyIcons[tech.toLowerCase()] || [];
      return IconComponent ? (
        <IconComponent key={tech} className={`${iconStyle}`} />
      ) : null;
    });
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-gray-900/85 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ padding: '2px' }}
      >
        <div className="h-full w-full rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800" />
      </div>

      <div className="relative z-10">
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-52 overflow-hidden rounded-t-2xl"
        >
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            priority={index < 3}
            placeholder="blur"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="font-semibold text-white">View Project</span>
              <RxOpenInNewWindow className="text-xl text-white" />
            </div>
          </div>

          {project.inProgress && (
            <div className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
              In Progress
            </div>
          )}
        </Link>

        <div className="p-6">
          <div className="mb-3">
            <h3 className="mb-1 text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-400">
              {project.title}
            </h3>
            <span className="text-xs font-medium text-gray-400">
              {project.category}
            </span>
          </div>

          <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-300">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {renderTechnologyIcons()}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
