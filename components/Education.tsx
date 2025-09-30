
import React from 'react';
import type { EducationItem } from '../types';

interface EducationProps {
  educationHistory: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ educationHistory }) => {
  return (
    <section id="education" className="mb-16 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gold-400 mb-6 tracking-wide">Education</h2>
      <div className="space-y-6">
        {educationHistory.map((edu, index) => (
          <div key={index} className="p-4 rounded-lg bg-gray-800/50 border border-transparent hover:border-gray-700/50 transition-colors duration-300">
            <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-semibold text-gray-100">{edu.institution}</h3>
                <p className="text-sm text-gray-400">{edu.duration}</p>
            </div>
            <p className="text-md text-gold-400">{edu.degree}</p>
            <p className="text-sm text-gray-400">{edu.location} &middot; {edu.cgpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;