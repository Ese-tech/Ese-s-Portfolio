import { experiences } from '@/lib/data';
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
          {/* Timeline Line - Different positioning for mobile vs desktop */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"></div>

          {experiences.map((item, index) => (
            <div key={index} className="group relative mb-8 flex items-start md:items-center md:justify-normal md:odd:flex-row-reverse">
              {/* Timeline Item Content */}
              <div className="ml-14 flex w-full items-start md:ml-0 md:w-1/2 md:items-center md:pr-8 md:odd:flex-row-reverse md:odd:pl-8 md:odd:text-right">
                <div className="w-full rounded-lg border bg-card p-4 shadow-sm transition-all group-hover:shadow-md">
                  <p className="text-sm font-semibold text-primary">{item.period}</p>
                  <h3 className="text-base font-bold leading-tight md:text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground md:text-base">{item.company}</p>
                  <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
                  {item.technologies.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {item.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-secondary px-2 py-1 rounded">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Timeline Dot and Icon - Different positioning for mobile */}
              <div className="absolute left-3 top-2 z-10 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background shadow-sm transition-all group-hover:scale-110 md:h-10 md:w-10">
                  {item.title.toLowerCase().includes('student') || item.title.toLowerCase().includes('ausbildung') ? (
                    <GraduationCap className="h-3 w-3 text-primary md:h-5 md:w-5" />
                  ) : (
                    <Briefcase className="h-3 w-3 text-primary md:h-5 md:w-5" />
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
