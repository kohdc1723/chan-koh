import projects from "@/data/projects";
import ProjectItem from "@/app/(home)/_components/_projects/project-item";

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col">
            <h3 className="sticky lg:static top-0 pt-5 lg:pt-20 pb-5 px-5 lg:px-0 text-2xl font-black z-10 bg-neutral-800">
                Projects
            </h3>

            <div className="flex flex-col gap-1 py-10 px-5 lg:px-0">
                {projects.map(project => (
                    <ProjectItem key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
};