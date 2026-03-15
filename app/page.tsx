import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="w-full lg:w-1/2 flex flex-col gap-10 py-5 lg:py-20">
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
    </main>
  );
}
