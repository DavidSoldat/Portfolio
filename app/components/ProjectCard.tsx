'use client';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { Project } from '../lib/types';
import technologyIcons from '../lib/icons';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { useEffect, useState } from 'react';

export default function ProjectCard({ project }: { project: Project }) {
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
    <Tilt>
      <div className="h-full max-w-lg overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-950">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <div className="relative h-48 w-full">
            <Image
              src={imageSrc}
              alt={project.title}
              fill
              sizes="100%"
              priority
              style={{ objectFit: 'cover' }}
              className="rounded-t-xl"
            />
          </div>
        </a>

        <div className="p-5">
          <div className="mb-2 flex items-center gap-2">
            <h3
              className={`text-base font-semibold ${project.inProgress ? 'text-red-500' : 'text-gray-900 dark:text-white'}`}
            >
              {project.title}
            </h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex justify-start space-x-4 text-3xl">
            {renderTechnologyIcons()}
          </div>
        </div>
      </div>
    </Tilt>
  );
}
