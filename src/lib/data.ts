import type { SkillCategory, Project, Experience, BlogPost } from "@/lib/types";
import { Code, Server, Database, GitBranch, ReactLogo } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaVercel } from 'react-icons/fa';

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: Code },
      { name: "CSS3", icon: Code },
      { name: "JavaScript (ES6+)", icon: Code },
      { name: "React", icon: ReactLogo },
      { name: "Next.js", icon: ReactLogo },
      { name: "Tailwind CSS", icon: Code },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "MongoDB", icon: Database },
      { name: "REST APIs", icon: Server },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "Vercel", icon: GitBranch },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "E-Commerce Platform",
    image: "project1",
    description:
      "A full-featured e-commerce website built with the MERN stack. Includes product listings, shopping cart, user authentication, and a checkout process. Designed to be scalable and responsive.",
    githubLink: "https://github.com/",
    liveLink: "#",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: "proj-2",
    title: "Recipe Finder App",
    image: "project2",
    description:
      "A web application that helps users discover new recipes based on ingredients they have. Integrated with a third-party recipe API and features a clean, user-friendly interface.",
    githubLink: "https://github.com/",
    liveLink: "#",
    tags: ["React", "API", "JavaScript", "CSS"],
  },
  {
    id: "proj-3",
    title: "Personal Blog",
    image: "project3",
    description:
      "A minimalist blog built with Next.js and styled with Tailwind CSS. Features static site generation for fast performance and easy content management with Markdown files.",
    githubLink: "https://github.com/",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];

export const experienceData: Experience[] = [
  {
    date: "2023 - 2024",
    title: "Full-Stack Web Development Training",
    company: "Digital Career Institute (DCI), Germany",
    description:
      "Completed an intensive one-year training program covering the entire web development stack, from frontend technologies like React to backend with Node.js. Developed several projects, both individually and in teams.",
  },
  {
    date: "2020 - 2023",
    title: "Junior Marketing Assistant",
    company: "Creative Solutions GmbH",
    description:
      "Assisted in developing and implementing marketing strategies. Managed social media channels and created content, which sparked my interest in web design and development.",
  },
];

export const blogPostsData: BlogPost[] = [
  {
    slug: "mastering-react-hooks",
    title: "Mastering React Hooks: A Deep Dive",
    image: "blog1",
    date: "July 15, 2024",
    excerpt: "Explore the power of React Hooks and learn how to write cleaner, more efficient, and more readable functional components.",
    content: "<p>In this post, we'll take a deep dive into React Hooks. We'll cover useState, useEffect, useContext, and even create our own custom hooks. By the end, you'll have a solid understanding of how to leverage hooks to build powerful React applications.</p><h2>Why Hooks?</h2><p>Hooks were introduced in React 16.8 to let you use state and other React features without writing a class. They solve a wide variety of seemingly unconnected problems in React that we’ve encountered over five years of writing and maintaining tens of thousands of components.</p>",
  },
  {
    slug: "tailwind-css-for-beginners",
    title: "A Beginner's Guide to Tailwind CSS",
    image: "blog2",
    date: "June 28, 2024",
    excerpt: "Discover how Tailwind CSS, a utility-first CSS framework, can revolutionize your web development workflow.",
    content: "<p>Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. This guide will get you started from installation to building your first components.</p>",
  },
];
