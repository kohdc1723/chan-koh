import About from "@/app/(home)/_components/_about/about";
import Experience from "@/app/(home)/_components/_experience/experience";
import Education from "@/app/(home)/_components/_education/education";
import Projects from "@/app/(home)/_components/_projects/projects";
import Skills from "@/app/(home)/_components/_skills/skills";

export default function HomePage() {
    return (
        <div className="relative flex flex-col flex-1">
            <About />
            <Experience />
            <Education />
            <Projects />
            <Skills />
        </div>
    );
};