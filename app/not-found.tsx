import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='dark:text-violet-50 text-black p-4 flex flex-col justify-center h-full items-center'>
      <h2 className='font-bold uppercase'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href='/'
        className='px-2 py-1 border border-black dark:border-violet-50 rounded-md hover:text-transparent hover:bg-clip-text hover:bg-violet-50 mt-3'
      >
        Return Home
      </Link>
    </div>
  );
}
