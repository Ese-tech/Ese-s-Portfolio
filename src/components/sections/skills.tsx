import { skillsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">My Technical Skills</h2>
          <p className="mt-4 text-lg text-muted-foreground">The tools and technologies I use to build web applications.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {skillsData.map((category) => (
            <Card key={category.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.skills[0].icon className="h-6 w-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="px-3 py-1 text-sm">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
