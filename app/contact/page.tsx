import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('../components/ContactForm'), {
  loading: () => (
    <div className="mx-auto w-full max-w-2xl animate-pulse">
      <div className="h-96 rounded-2xl bg-gray-800" />
    </div>
  ),
  ssr: false,
});

export const metadata: Metadata = {
  title: '<ContactMe />',
};

export default function Contact() {
  return (
    <div className="flex w-full animate-blur-to-normal flex-col items-center gap-10 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <ContactForm />
    </div>
  );
}
