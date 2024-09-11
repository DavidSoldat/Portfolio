import Link from 'next/link';
import React from 'react';
import DarkModeToggle from './ModeToggle';

export default function Navigation() {
  return (
    <nav className="z-20 flex items-center justify-between px-6 py-10">
      <div className="flex space-x-4 text-2xl text-gray-900 dark:text-violet-100">
        <Link href="/">
          <span className="hover-underline">home</span>
        </Link>
        <Link href="/projects">
          <span className="hover-underline">projects</span>
        </Link>
        <Link href="/contact">
          <span className="hover-underline">contact</span>
        </Link>
      </div>
      <DarkModeToggle />
    </nav>
  );
}
