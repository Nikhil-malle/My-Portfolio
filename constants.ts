import type { Profile } from './types';

export const PROFILE_DATA: Profile = {
  name: "Nikhil Reddy Malle",
  title: "Aspiring Software Development Intern",
  email: "nikhilreddy.malle@slu.edu",
  phone: "+1 (314) 203-7669",
  linkedin: "https://www.linkedin.com/in/nikhil-reddy-malle-50a2b823b/",
  github: "https://github.com/Nikhil-malle",
  address: "St. Louis, MO 63108",
  summary: [
    "Enthusiastic graduate student from Master's in Computer Information Science with strong motivation and leadership skills.",
    "Strong analytical skills with the ability to deliver quality results under pressure and collaborate effectively in team environments.",
    "Seeking a Software Development Intern position to in projects using React and design tools like Figma.",
    "Quick learner with a passion for adopting and working with new technologies and methodologies."
  ],
  education: [
    {
      institution: "Saint Louis University",
      location: "Saint Louis, MO",
      degree: "Master of Science in Computer Information Science",
      cgpa: "CGPA: 3.59/4.0",
      duration: "2023 - 2025",
    },
    {
      institution: "Bharath University",
      location: "India",
      degree: "Bachelor of Technology in Computer Science",
      cgpa: "CGPA: 8.59/10",
      duration: "2019 - 2023",
    },
  ],
  projects: [
    {
      title: "Personal Portfolio Website",
      description: [
        "Designed wireframes using Figma and developed a fully responsive portfolio site using React, HTML, and CSS.",
        "Showcased personal projects and skills with reusable components and clean UI, optimized for mobile and desktop."
      ],
      technologies: ["React", "HTML", "CSS", "Figma"],
    },
    {
      title: "Commonwealth Games (2022) Data Analytics Project",
      description: [
        "Conducted web scraping and data processing using Python, SQL, and Excel for analytical insights.",
        "Developed interactive dashboards using Tableau and R to support strategic decision-making."
      ],
      technologies: ["Python", "SQL", "Excel", "Tableau", "R"],
      liveLink: "https://public.tableau.com/app/profile/nikhil.reddy.malle/viz/CommonWealthGamesVIZ3/COMMONWEALTHGAMESANALYSIS"
    },
    {
      title: "Fraud App Detection using Sentiment Analysis",
      description: [
        "Analyzed user review data using SQL, Python, and NLP techniques to detect fraudulent applications.",
        "Built classification models to uncover patterns and support data-driven fraud detection strategies."
      ],
      technologies: ["SQL", "Python", "NLP"],
    }
  ],
  skills: [
    {
        name: "Programming Languages",
        skills: [
            { name: "JavaScript" },
            { name: "HTML" },
            { name: "CSS" },
            { name: "Python" },
            { name: "Oracle SQL" },
            { name: "PL/SQL" },
            { name: "R" }
        ]
    },
    {
        name: "Frontend Technologies",
        skills: [
            { name: "React" },
            { name: "Figma" }
        ]
    },
    {
        name: "Tools & Technologies",
        skills: [
            { name: "Oracle SQL Developer" },
            { name: "Tableau" },
            { name: "Visual Studio Code" },
            { name: "GitHub" }
        ]
    },
    {
        name: "Data Analytics & Visualization",
        skills: [
            { name: "Tableau Desktop" },
            { name: "R" },
            { name: "MS Excel" }
        ]
    }
  ]
};