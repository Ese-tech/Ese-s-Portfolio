'use server';

/**
 * @fileOverview This file defines a Genkit flow to optimize the project showcase for Ese's portfolio.
 *
 * It selects the most compelling project details (title, image, description, GitHub link) to present to potential employers.
 *
 * @interface OptimizeProjectShowcaseInput - Defines the input schema for the optimizeProjectShowcase function.
 * @interface OptimizeProjectShowcaseOutput - Defines the output schema for the optimizeProjectShowcase function.
 * @function optimizeProjectShowcase - The main function that executes the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeProjectShowcaseInputSchema = z.object({
  title: z.string().describe('The title of the project.'),
  image: z
    .string()
    .describe(
      'A photo of the project, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // Corrected the typo here
    ),
  description: z.string().describe('A detailed description of the project.'),
  githubLink: z.string().url().describe('The link to the GitHub repository of the project.'),
  potentialEmployerDescription: z.string().describe('Description of the potential employer, e.g. company values, mission, and type of work.'),
});

export type OptimizeProjectShowcaseInput = z.infer<typeof OptimizeProjectShowcaseInputSchema>;

const OptimizeProjectShowcaseOutputSchema = z.object({
  optimizedTitle: z.string().describe('The optimized title of the project for the portfolio.'),
  optimizedDescription: z.string().describe('The optimized description of the project for the portfolio.'),
  reasoning: z.string().describe('The AI reasoning for the specific optimizations.'),
});

export type OptimizeProjectShowcaseOutput = z.infer<typeof OptimizeProjectShowcaseOutputSchema>;

export async function optimizeProjectShowcase(
  input: OptimizeProjectShowcaseInput
): Promise<OptimizeProjectShowcaseOutput> {
  return optimizeProjectShowcaseFlow(input);
}

const optimizeProjectShowcasePrompt = ai.definePrompt({
  name: 'optimizeProjectShowcasePrompt',
  input: {schema: OptimizeProjectShowcaseInputSchema},
  output: {schema: OptimizeProjectShowcaseOutputSchema},
  prompt: `You are an expert portfolio optimizer, skilled at presenting web development projects in the best possible light to potential employers.

  Given the following project details and a description of the potential employer, optimize the project title and description to be as compelling as possible. Explain the reasoning behind the changes.

  Project Title: {{{title}}}
  Project Image: {{media url=image}}
  Project Description: {{{description}}}
  GitHub Link: {{{githubLink}}}
  Potential Employer Description: {{{potentialEmployerDescription}}}

  Optimize the title and description to highlight the most relevant and impressive aspects of the project for this specific employer. Explain your reasoning.

  Output the optimized title, optimized description, and your reasoning.
`,
});

const optimizeProjectShowcaseFlow = ai.defineFlow(
  {
    name: 'optimizeProjectShowcaseFlow',
    inputSchema: OptimizeProjectShowcaseInputSchema,
    outputSchema: OptimizeProjectShowcaseOutputSchema,
  },
  async input => {
    const {output} = await optimizeProjectShowcasePrompt(input);
    return output!;
  }
);
