import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const projectImage = PlaceHolderImages.find(p => p.id === project.image);

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
      {projectImage && (
        <div className="relative aspect-video w-full">
            <Image
              src={projectImage.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
        </div>
      )}
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map(tag => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" asChild>
          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Code
          </Link>
        </Button>
        {project.liveLink && (
          <Button asChild>
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
