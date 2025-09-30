import React from 'react';
import type { Profile } from '../types';
import { GithubIcon, LinkedinIcon } from './Icons';

interface FooterProps {
  profile: Pick<Profile, 'name' | 'github' | 'linkedin'>;
}

const Footer: React.FC<FooterProps> = ({ profile }) => {
  return (
    <footer className="mt-24 pt-8 border-t border-gray-800 text-center text-gray-500">
      <div className="flex justify-center space-x-6 mb-4">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
          <GithubIcon className="w-7 h-7" />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
          <LinkedinIcon className="w-7 h-7" />
        </a>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved.
      </p>
      <p className="text-xs mt-1">
        Built with React & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
