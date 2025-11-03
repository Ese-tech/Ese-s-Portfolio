import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import BlogPreview from "@/components/sections/blog-preview";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <BlogPreview />
      <Contact />
    </>
  );
}
