export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  address: string;
  summary: string[];
  education: EducationItem[];
  projects: Project[];
  skills: SkillCategory[];
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  cgpa: string;
  duration: string;
}

export interface Project {
  title: string;
  description: string[];
  technologies: string[];
  liveLink?: string;
}

export interface SkillCategory {
    name: string;
    skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: React.ReactNode;
}