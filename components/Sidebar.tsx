
import React from 'react';
import type { Profile } from '../types';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, LocationIcon } from './Icons';

interface SidebarProps {
  profile: Pick<Profile, 'name' | 'title' | 'email' | 'phone' | 'linkedin' | 'github' | 'address'>;
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ profile, activeSection }) => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <header className="lg:w-1/3 lg:fixed lg:inset-y-0 lg:flex lg:flex-col lg:justify-between p-8 md:p-12 bg-gray-900 lg:bg-gray-900/70 lg:backdrop-blur-sm lg:border-r lg:border-gray-800">
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white">{profile.name}</h1>
          <h2 className="mt-2 text-lg text-gold-400 font-medium">{profile.title}</h2>
        </div>

        <nav className="hidden lg:block mt-12">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.name}>
                  <a href={item.href} className="group flex items-center py-2">
                    <span
                      className={`w-12 h-px bg-gray-600 group-hover:w-24 group-hover:bg-gold-400 transition-all duration-300 ${
                        isActive ? 'w-24 bg-gold-400' : ''
                      }`}
                    ></span>
                    <span
                      className={`ml-4 text-gray-400 group-hover:text-gold-400 font-semibold tracking-widest uppercase text-xs transition-colors duration-300 ${
                        isActive ? 'text-gold-400' : ''
                      }`}
                    >
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-8">
        <div className="flex items-center space-x-4 text-gray-400">
            <MailIcon className="w-5 h-5 flex-shrink-0" />
            <a href={`mailto:${profile.email}`} className="text-sm hover:text-gold-400 transition-colors duration-300">{profile.email}</a>
        </div>
         <div className="flex items-center space-x-4 mt-3 text-gray-400">
            <PhoneIcon className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{profile.phone}</span>
        </div>
        <div className="flex items-center space-x-4 mt-3 text-gray-400">
            <LocationIcon className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{profile.address}</span>
        </div>
        <div className="flex space-x-6 mt-8">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
            <GithubIcon className="w-7 h-7" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
            <LinkedinIcon className="w-7 h-7" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
