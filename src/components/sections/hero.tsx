'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.split('#')[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-8 py-8 md:gap-12 md:grid-cols-2 md:py-0">
          <div className="order-2 text-center md:order-1 md:text-left">
            <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm Ese
            </h1>
            <p className="mt-2 text-base text-primary sm:text-lg">Motivierte Full-Stack-Quereinsteigerin</p>
            <p className="mt-4 text-base leading-7 text-foreground/80 sm:text-lg sm:leading-8 md:mt-6">
              Aktuell absolviere ich eine 19-monatige Full-Stack-Ausbildung beim Digital Career Institute (DCI) mit Fokus auf Frontend- und Backend-Entwicklung. Als flexible Quereinsteigerin bringe ich Zuverlässigkeit, Kommunikationsstärke und Problemlösungsorientierung mit. Ich möchte mein Wissen im Rahmen eines IT-Praktikums anwenden und vertiefen.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:mt-10 md:justify-start md:gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="#projects" onClick={handleScroll}>View My Work</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="w-full gap-2 sm:w-auto">
                <Link href="#contact" onClick={handleScroll}>
                  Contact Me <ArrowDown className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative h-[300px] w-[240px] sm:h-[350px] sm:w-[280px] md:h-[450px] md:w-[360px] lg:h-[550px] lg:w-[440px]">
              <Image
                src="/image/me.png"
                alt="Ese Osagie - Full-Stack Developer"
                fill
                className="rounded-lg object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
