import type { SkillCategory, Project, Experience, BlogPost } from "@/lib/types";
import { Code, Server, Database, GitBranch, PanelTop } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiVercel, SiMongodb, SiExpress, SiTypescript, SiTailwindcss, SiStripe } from 'react-icons/si';

export const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 88 },
  { name: 'Next.js', level: 85 },
  { name: 'Node.js', level: 82 },
  { name: 'Bun', level: 80 },
  { name: 'MongoDB', level: 80 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'NativeWind', level: 78 },
  { name: 'React Native', level: 75 },
  { name: 'Express.js', level: 80 },
  { name: 'REST API', level: 82 },
  { name: 'CRUD Operations', level: 85 },
  { name: 'Git', level: 85 },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'CineVerse - Movie Discovery App',
    description: 'A modern movie discovery app built with React Native and Expo, featuring smooth animations, beautiful gradients, and integration with TMDB API for real-time movie data.',
    image: '/image/movieapp.png',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'TMDB API', 'React Native Reanimated'],
    tags: ['Mobile App', 'React Native', 'API Integration'],
    githubLink: 'https://github.com/ese-tech/movie-app',
    liveLink: 'https://movie-app-nu-tan.vercel.app/',
    featured: true,
  },
  {
    id: '2',
    title: 'LumaPress - Personal Blog Platform',
    description: 'A full-stack blog platform with Next.js 16, featuring modern design, TypeScript integration, and MongoDB backend with JWT authentication.',
    image: '/image/lumablog.png',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Express.js', 'JWT', 'Cloudinary'],
    tags: ['Full-Stack', 'Blog Platform', 'Authentication'],
    githubLink: 'https://github.com/ese-tech/personal-blog',
    liveLink: 'https://personal-blog-six-mu.vercel.app/',
    featured: true,
  },
  {
    id: '3',
    title: 'ShopHub - E-Commerce Platform',
    description: 'A comprehensive e-commerce platform built with React 19, Vite, and modern state management using Zustand. Features Stripe payment integration and Cloudinary image management.',
    image: '/image/shophube-comess.png',
    technologies: ['React 19', 'Vite', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Stripe', 'MongoDB', 'Cloudinary'],
    tags: ['E-Commerce', 'Payment Integration', 'State Management'],
    githubLink: 'https://github.com/ese-tech/e-commerce-platform',
    liveLink: 'https://e-commerce-platform-vert.vercel.app/',
    featured: true,
  },
];

export const experiences = [
  {
    id: '1',
    title: 'Full-Stack Web Development Student',
    company: 'Digital Career Institute (DCI)',
    period: 'Juni 2024 – January 2026',
    description: 'Intensive 19-month Full-Stack development program focusing on frontend and backend technologies. Hands-on training with real projects, teamwork, and individual mentoring for successful IT career transition.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: '2',
    title: 'Freelance Household Assistant',
    company: 'Private Households - Bielefeld',
    period: '2020 – 2024',
    description: 'Independent organization, customer communication, and high reliability in service delivery. Developed strong problem-solving and time management skills.',
    technologies: [],
  },
  {
    id: '3',
    title: 'Reception Staff',
    company: 'Hotel Krug – Bonn',
    period: '2012 – 2019',
    description: 'Worked with booking systems, customer service, problem-solving, and team coordination. Gained valuable experience in digital workflows and customer relations.',
    technologies: [],
  },
  {
    id: '4',
    title: 'Sales Associate with Extended Responsibilities',
    company: 'Replay FashionBox GmbH – Bonn',
    period: '2013 – 2016',
    description: 'Advanced from part-time to full-time position, responsible for daily operations, inventory management, and collaboration with management team.',
    technologies: [],
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
