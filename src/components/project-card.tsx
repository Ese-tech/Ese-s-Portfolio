import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg leading-tight sm:text-xl">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 4).map(tech => (
            <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5">{tech}</Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs px-2 py-0.5">+{project.technologies.length - 4} more</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow pb-3">
        <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">{project.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 sm:flex-row sm:justify-end">
        <Button variant="outline" size="sm" className="flex-1 sm:flex-none" asChild>
          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Code
          </Link>
        </Button>
        {project.liveLink && (
          <Button size="sm" className="flex-1 sm:flex-none" asChild>
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
