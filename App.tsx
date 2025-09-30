
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { PROFILE_DATA } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -70% 0px', // A section is "active" when it's in the middle 40% of the viewport
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen lg:flex">
      <Sidebar profile={PROFILE_DATA} activeSection={activeSection} />
      <main className="lg:w-2/3 lg:ml-auto p-8 md:p-12 animate-fade-in">
        <About summary={PROFILE_DATA.summary} />
        <Experience projects={PROFILE_DATA.projects} />
        <Education educationHistory={PROFILE_DATA.education} />
        <Skills skills={PROFILE_DATA.skills} />
        <Footer profile={PROFILE_DATA} />
      </main>
    </div>
  );
};

export default App;
