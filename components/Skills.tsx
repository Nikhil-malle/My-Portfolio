
import React from 'react';
import type { SkillCategory } from '../types';

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-gold-400 mb-6 tracking-wide">Technical Skills</h2>
      <div className="space-y-6">
        {skills.map((category) => (
            <div key={category.name}>
                <h3 className="text-lg font-semibold text-gray-200 mb-3">{category.name}</h3>
                <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                        <div key={skill.name} className="flex items-center px-4 py-2 rounded-md bg-gray-800 border border-gray-700/60">
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;