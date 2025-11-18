'use client';

import { useState } from 'react';
import { CodeXml, Github, Linkedin, Menu, Twitter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: '#', icon: Github, label: 'GitHub' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <a href="#" className="mr-6 flex items-center space-x-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block">FolioForge</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <div className="hidden md:flex items-center gap-2">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.label}</span>
                </Button>
              </a>
            ))}
          </div>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <a href="#" className="flex items-center space-x-2" onClick={closeMobileMenu}>
                    <CodeXml className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">FolioForge</span>
                  </a>
                  <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close Menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-4 py-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto flex items-center justify-center gap-4 border-t pt-4">
                  {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                      <Button variant="ghost" size="icon">
                        <link.icon className="h-5 w-5" />
                        <span className="sr-only">{link.label}</span>
                      </Button>
                    </a>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
