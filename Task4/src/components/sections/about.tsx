'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { generateAboutMe } from '@/ai/flows/generate-about-me';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, LoaderCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

const skills = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS',
  'Figma', 'JavaScript', 'HTML5', 'CSS3', 'UI/UX Design'
];

export default function About() {
  const [keywords, setKeywords] = useState('creative developer, react specialist, loves clean design');
  const [aboutMe, setAboutMe] = useState(
    "I'm a passionate developer with a knack for creating engaging and user-friendly digital experiences. With a strong background in React and a love for clean design, I strive to build applications that are not only functional but also beautiful and intuitive."
  );
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateAboutMe = async () => {
    setIsLoading(true);
    setAboutMe('');
    try {
      const result = await generateAboutMe({ keywords });
      setAboutMe(result.aboutMe);
    } catch (error) {
      console.error('Failed to generate about me:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate introduction. Please try again.',
        variant: 'destructive',
      });
      setAboutMe("Failed to generate content. Please check your keywords and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center font-headline mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 flex justify-center">
            <Avatar className="h-48 w-48 md:h-64 md:w-64 border-4 border-primary shadow-lg">
              <Image src="https://placehold.co/256x256.png" alt="Profile Picture" width={256} height={256} data-ai-hint="profile picture" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div className="md:col-span-3">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground min-h-[100px]">
                    {isLoading ? <LoaderCircle className="animate-spin" /> : aboutMe}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="text-accent" />
                    <Label htmlFor="about-keywords" className="font-semibold">Generate a new intro with AI</Label>
                  </div>
                  <Textarea
                    id="about-keywords"
                    placeholder="e.g., frontend developer, typescript expert, loves coffee"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    className="bg-background"
                  />
                  <Button onClick={handleGenerateAboutMe} disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      'Generate Introduction'
                    )}
                  </Button>
                </CardContent>
              </Card>
              <div>
                <h3 className="text-lg font-semibold mb-4">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Badge variant="outline" className="text-sm px-3 py-1 bg-background">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
