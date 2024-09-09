import Link from 'next/link';
import React from 'react';
import DarkModeToggle from './ModeToggle';

export default function Navigation() {
  return (
    <nav className='flex justify-between items-center p-4 z-20'>
      <div className='flex space-x-4'>
        <Link className='dark:text-violet-50 text-black text-2xl' href='/'>
          <span className='hover-underline'>home</span>
        </Link>
        <Link
          className='dark:text-violet-50 text-black text-2xl'
          href='/projects'
        >
          <span className='hover-underline'>projects</span>
        </Link>
        <Link
          className='dark:text-violet-50 text-black text-2xl'
          href='/contact'
        >
          <span className='hover-underline'>contact</span>
        </Link>
      </div>
      <DarkModeToggle />
    </nav>
  );
}
