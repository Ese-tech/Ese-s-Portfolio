import { skillsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaVercel,
} from 'react-icons/fa';
import { Code, Database, GitBranch, Server } from 'lucide-react';

// A mapping from skill name to a React Icon component
const iconMap: { [key: string]: React.ElementType } = {
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  'JavaScript (ES6+)': FaJs,
  React: FaReact,
  'Next.js': FaReact,
  'Node.js': FaNodeJs,
  'Express.js': Server,
  MongoDB: Database,
  'REST APIs': Server,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Vercel: FaVercel,
  'Tailwind CSS': Code,
};


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
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const Icon = iconMap[skill.name] || skill.icon;
                    return (
                      <Badge key={skill.name} variant="secondary" className="flex items-center gap-2 px-3 py-1 text-sm">
                         <Icon className="h-4 w-4" />
                        {skill.name}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
