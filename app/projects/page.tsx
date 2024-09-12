import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '<MyProjects />',
};

export default function Projects() {
  return (
    <div className="container animate-blur-to-normal px-6 py-10">
      <h1 className="text block">Projects</h1>
    </div>
  );
}
