// @ts-nocheck
'use server';

import { z } from 'zod';
import { optimizeProjectShowcase } from '@/ai/flows/optimize-project-showcase';
import type { Project } from '@/lib/types';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Validation failed.',
      };
    }

    // In a real application, you would send an email here.
    // For this demo, we'll just log the data.
    console.log('Contact Form Submitted:');
    console.log(validatedFields.data);

    return { message: 'Thank you! Your message has been sent.', errors: null };
  } catch (e) {
    return {
      message: 'An unexpected error occurred.',
      errors: null,
    };
  }
}

const DUMMY_IMAGE_DATA_URI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

export async function getOptimizedProjects(employerDescription: string, projects: Project[]): Promise<Project[] | { error: string }> {
  if (!employerDescription) {
    return { error: 'Please describe the potential employer.' };
  }

  try {
    const optimizedProjects = await Promise.all(
      projects.map(async (project) => {
        const result = await optimizeProjectShowcase({
          title: project.title,
          image: DUMMY_IMAGE_DATA_URI, // Using a dummy image as per plan
          description: project.description,
          githubLink: project.githubLink,
          potentialEmployerDescription: employerDescription,
        });

        return {
          ...project,
          title: result.optimizedTitle,
          description: result.optimizedDescription,
          // Optional: You could store and display the reasoning
          // reasoning: result.reasoning, 
        };
      })
    );
    return optimizedProjects;
  } catch (error) {
    console.error('Error optimizing projects:', error);
    return { error: 'Failed to optimize projects. Please try again later.' };
  }
}
