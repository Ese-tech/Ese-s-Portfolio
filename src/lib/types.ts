import type { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  tags: string[];
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  content: string;
}
