import { experienceData } from '@/lib/data';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">My Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">A timeline of my professional and educational background.</p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>

          {experienceData.map((item, index) => (
            <div key={index} className="group relative mb-8 flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
              {/* Timeline Item Content */}
              <div className="flex w-full items-center md:w-1/2 md:pr-8 md:odd:flex-row-reverse md:odd:pl-8 md:odd:text-right">
                <div className="w-full rounded-lg border bg-card p-4 shadow-sm transition-all group-hover:shadow-md">
                  <p className="text-sm font-semibold text-primary">{item.date}</p>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-md text-muted-foreground">{item.company}</p>
                  <p className="mt-2 text-sm">{item.description}</p>
                </div>
              </div>
              
              {/* Timeline Dot and Icon */}
              <div className="absolute left-1/2 z-10 -translate-x-1/2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background transition-all group-hover:scale-110">
                  {item.title.toLowerCase().includes('training') ? (
                    <GraduationCap className="h-5 w-5 text-primary" />
                  ) : (
                    <Briefcase className="h-5 w-5 text-primary" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
