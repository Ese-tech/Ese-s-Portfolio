'use client';

import { useState, useTransition } from 'react';
import { projectsData } from '@/lib/data';
import type { Project } from '@/lib/types';
import ProjectCard from '@/components/project-card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { getOptimizedProjects } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [employerDescription, setEmployerDescription] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleOptimize = () => {
    startTransition(async () => {
      const result = await getOptimizedProjects(employerDescription, projectsData);
      if ('error' in result) {
        toast({
          title: 'Optimization Failed',
          description: result.error,
          variant: 'destructive',
        });
      } else {
        setProjects(result);
        toast({
          title: 'Success!',
          description: 'Project descriptions have been optimized.',
        });
      }
    });
  };

  const handleReset = () => {
    setProjects(projectsData);
    setEmployerDescription('');
    toast({
        title: 'Reset',
        description: 'Project descriptions have been reset to default.',
    });
  };

  return (
    <section id="projects" className="bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">My Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A selection of my work. You can even tailor the descriptions to a specific job!
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-3xl rounded-lg border bg-background p-6 shadow-sm">
          <div className="grid w-full gap-2">
             <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary"/>
                <Label htmlFor="employer-description" className="text-lg font-semibold">AI-Powered Optimization</Label>
             </div>
            <p className="text-sm text-muted-foreground">
              Describe a potential employer or job role below (e.g., "a fast-growing startup focused on fintech solutions"), and watch the AI tailor my project highlights.
            </p>
            <Textarea
              id="employer-description"
              placeholder="e.g., A mission-driven company building educational tools for children..."
              value={employerDescription}
              onChange={(e) => setEmployerDescription(e.target.value)}
              className="mt-2"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button onClick={handleOptimize} disabled={isPending || !employerDescription}>
              {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Optimize Descriptions
            </Button>
            <Button variant="outline" onClick={handleReset} disabled={isPending}>
              Reset
            </Button>
          </div>
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
