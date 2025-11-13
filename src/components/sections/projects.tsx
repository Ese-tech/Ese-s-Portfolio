'use client';

import { projects } from '@/lib/data';
import ProjectCard from '@/components/project-card';

export default function Projects() {
  return (
    <section id="projects" className="bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">My Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A selection of my recent work showcasing different technologies and approaches to web development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
