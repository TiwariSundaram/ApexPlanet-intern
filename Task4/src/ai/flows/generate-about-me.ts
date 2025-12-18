'use server';

/**
 * @fileOverview A flow to generate a personalized 'About Me' section for a portfolio website.
 *
 * - generateAboutMe - A function that generates the 'About Me' content.
 * - GenerateAboutMeInput - The input type for the generateAboutMe function.
 * - GenerateAboutMeOutput - The return type for the generateAboutMe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutMeInputSchema = z.object({
  keywords: z.string().describe('Keywords describing the user and their skills.'),
});
export type GenerateAboutMeInput = z.infer<typeof GenerateAboutMeInputSchema>;

const GenerateAboutMeOutputSchema = z.object({
  aboutMe: z.string().describe('A personalized introduction based on the provided keywords.'),
});
export type GenerateAboutMeOutput = z.infer<typeof GenerateAboutMeOutputSchema>;

export async function generateAboutMe(input: GenerateAboutMeInput): Promise<GenerateAboutMeOutput> {
  return generateAboutMeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAboutMePrompt',
  input: {schema: GenerateAboutMeInputSchema},
  output: {schema: GenerateAboutMeOutputSchema},
  prompt: `You are a professional content writer specializing in crafting compelling 'About Me' sections for personal portfolio websites.

  Based on the following keywords, generate a personalized and engaging introduction:

  Keywords: {{{keywords}}}

  The introduction should be concise, highlighting the user's skills and experience. Focus on making the introduction sound professional, creative, and approachable. Tailor it to fit a modern, tech-focused audience.`,
});

const generateAboutMeFlow = ai.defineFlow(
  {
    name: 'generateAboutMeFlow',
    inputSchema: GenerateAboutMeInputSchema,
    outputSchema: GenerateAboutMeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
