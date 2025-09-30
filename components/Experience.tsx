import React from 'react';
import type { Project } from '../types';
import { LinkIcon } from './Icons';

interface ExperienceProps {
  projects: Project[];
}

const Experience: React.FC<ExperienceProps> = ({ projects }) => {
  return (
    <section id="experience" className="mb-16 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gold-400 mb-6 tracking-wide">Project Experience</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold-900/20">
            <h3 className="text-xl font-bold text-gray-100 mb-3">{project.title}</h3>
            <div className="space-y-2 text-gray-400 mb-4">
              {project.description.map((desc, i) => (
                <p key={i}>&bull; {desc}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-gold-900/50 text-gold-300">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-gold-400 transition-colors duration-300">
                  <LinkIcon className="w-5 h-5" />
                  <span>View Tableau Visualization</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;