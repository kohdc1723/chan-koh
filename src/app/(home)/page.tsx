import About from "@/app/(home)/_component/about";
import Experience from "@/app/(home)/_component/experience";
import Education from "@/app/(home)/_component/education";
import Projects from "@/app/(home)/_component/projects";
import Skills from "@/app/(home)/_component/skills";

export default function HomePage() {
    return (
        <div className="flex-1">
            <About />
            <Experience />
            <Education />
            <Projects />
            <Skills />
        </div>
    );
};