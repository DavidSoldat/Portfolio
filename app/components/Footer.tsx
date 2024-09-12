import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className="flex justify-between px-6 py-10 text-gray-900 dark:text-violet-100">
      <div className="flex gap-5">
        <a target="_blank" href="https://www.linkedin.com/in/david-soldat-jsx/">
          <BsLinkedin className="text-2xl hover:text-violet-500" />
        </a>

        <a target="_blank" href="https://github.com/DavidSoldat">
          <BsGithub className="text-2xl hover:text-violet-500" />
        </a>

        <a target="_blank" href="https://twitter.com/soldat_d00">
          <BsTwitterX className="text-2xl hover:text-violet-500" />
        </a>
      </div>
      <p className="justify-self-end text-gray-500">© 2024 David Soldat</p>
    </div>
  );
}
