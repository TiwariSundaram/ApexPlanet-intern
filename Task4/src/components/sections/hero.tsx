import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-56px)] w-full flex items-center justify-center"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Creative Developer &amp; UI Enthusiast
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
          I design and build beautiful, responsive, and user-friendly websites and applications. Welcome to my digital playground.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#projects">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="#contact">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Get In Touch
              <FileText className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll down to about section">
          <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center items-start p-1">
            <div className="w-1 h-2 bg-foreground rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
}
