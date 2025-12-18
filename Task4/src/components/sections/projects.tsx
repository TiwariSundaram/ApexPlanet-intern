import ProjectCard from '@/components/project-card';
import type { Project } from '@/lib/types';

const projects: Project[] = [
  {
    title: 'QuantumLeap CRM',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'saas dashboard',
    liveUrl: '#',
    githubUrl: '#',
    initialKeywords: 'CRM, sales, dashboard, analytics',
  },
  {
    title: 'Aura E-commerce',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'fashion store',
    liveUrl: '#',
    githubUrl: '#',
    initialKeywords: 'online store, fashion, react, checkout',
  },
  {
    title: 'Nova AI Assistant',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'modern application',
    liveUrl: '#',
    githubUrl: '#',
    initialKeywords: 'AI, chatbot, machine learning, productivity',
  },
  {
    title: 'Zenith Landing Page',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'website design',
    liveUrl: '#',
    githubUrl: '#',
    initialKeywords: 'startup, landing page, conversion, marketing',
  },
  {
    title: 'Echo Social Network',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'social media',
    liveUrl: '#',
    githubUrl: '#',
    initialKeywords: 'social media, community, messaging, user profiles',
  },
  {
    title: 'Momentum Task Tracker',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'productivity app',
    liveUrl: '#',
    githubUrl: '#',
    initialKeywords: 'task management, productivity, kanban, collaboration',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center font-headline mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
