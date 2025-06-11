'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DarkModeToggle from './ModeToggle';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const [active, setActive] = useState('');

  useEffect(() => {
    if (pathname === '/') {
      setActive('home');
    } else {
      setActive(pathname.slice(1));
    }
  }, [pathname]);

  return (
    <nav className="z-20 flex items-center justify-between px-6 py-10">
      <div className="flex space-x-4 text-2xl text-gray-900 dark:text-violet-100">
        <Link href="/">
          <span
            className={`hover-underline ${active === 'home' ? 'activeUnderline' : ''}`}
          >
            home
          </span>
        </Link>
        <Link href="/projects">
          <span
            className={`hover-underline ${active === 'projects' ? 'activeUnderline' : ''}`}
          >
            projects
          </span>
        </Link>
        <Link href="/contact">
          <span
            className={`hover-underline ${active === 'contact' ? 'activeUnderline' : ''}`}
          >
            contact
          </span>
        </Link>
      </div>
      <DarkModeToggle />
    </nav>
  );
}
