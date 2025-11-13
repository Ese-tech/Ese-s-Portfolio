import { skills } from '@/lib/data';
import { Progress } from '@/components/ui/progress';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">My Technical Skills</h2>
          <p className="mt-4 text-lg text-muted-foreground">The technologies I've been working with and my proficiency level.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
