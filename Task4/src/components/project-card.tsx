'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { generateProjectDescription } from '@/ai/flows/generate-project-description';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ArrowUpRight, Github, Sparkles, LoaderCircle } from 'lucide-react';
import type { Project } from '@/lib/types';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [description, setDescription] = useState('Click below to generate a project description with AI!');
  const [keywords, setKeywords] = useState(project.initialKeywords);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateDescription = async () => {
    setIsLoading(true);
    setDescription('');
    try {
      const result = await generateProjectDescription({ keywords });
      setDescription(result.description);
    } catch (error) {
      console.error('Failed to generate description:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate description. Please try again.',
        variant: 'destructive',
      });
      setDescription('Failed to generate content. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      <Card className="h-full flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
        <CardHeader>
          <CardTitle className="font-headline">{project.title}</CardTitle>
        </CardHeader>
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            data-ai-hint={project.dataAiHint}
          />
        </div>
        <CardContent className="flex-grow p-6 flex flex-col justify-between">
          <div>
            <p className="text-muted-foreground mb-4 min-h-[60px]">
              {isLoading ? <LoaderCircle className="animate-spin" /> : description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" />
                <label htmlFor={`keywords-${project.title}`} className="text-sm font-medium">
                  AI Keywords
                </label>
              </div>
              <Input
                id={`keywords-${project.title}`}
                placeholder="e.g., react, tailwind, stripe"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
              <Button onClick={handleGenerateDescription} disabled={isLoading} variant="secondary" size="sm" className="w-full">
                {isLoading ? (
                  <>
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Description'
                )}
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 bg-secondary/50">
          <div className="flex justify-between w-full">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button>
                Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </a>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
