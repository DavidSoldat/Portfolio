'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Projects() {
  const container = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      gsap.to('.text', { x: 100, delay: 0.3 });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="container animate-blur-to-normal px-6 py-10"
    >
      <h1 className="text block">Projects</h1>
    </div>
  );
}
