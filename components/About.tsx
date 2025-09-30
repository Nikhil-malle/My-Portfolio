
import React from 'react';

interface AboutProps {
  summary: string[];
}

const About: React.FC<AboutProps> = ({ summary }) => {
  return (
    <section id="about" className="mb-16 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gold-400 mb-6 tracking-wide">About Me</h2>
      <div className="space-y-4 text-gray-300">
        {summary.map((point, index) => (
          <p key={index}>{point}</p>
        ))}
      </div>
    </section>
  );
};

export default About;