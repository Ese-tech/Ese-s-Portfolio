import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: LucideIcon | IconType;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon | IconType;
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
  technologies: string[];
  featured: boolean;
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
