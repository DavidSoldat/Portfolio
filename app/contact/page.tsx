import { Metadata } from 'next';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: '<ContactMe />',
};

export default function Contact() {
  return (
    <div className="flex w-full animate-blur-to-normal flex-col items-center gap-10 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <h1 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
        get in touch
      </h1>
      <ContactForm />
    </div>
  );
}
