import Image from "next/image";

import { ProjectType } from "@/data/projects";

interface ProjectItemProps {
    project: ProjectType;
};

export default function ProjectItem({
    project
}: ProjectItemProps) {
    return (
        <article className="p-5 rounded-md flex flex-col lg:flex-row justify-center items-center gap-5 w-full backdrop-brightness-125 hover:backdrop-brightness-150">
            <Image
                src={project.thumbnail}
                alt="thumbnail"
                className="w-60 h-60 rounded-md"
            />
            <div className="w-full h-full flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center w-full">
                        <h4 className="text-left font-black">
                            {project.title}
                        </h4>
                        <p className="text-right text-sm text-neutral-300 font-bold">
                            {project.startDate} - {project.endDate}
                        </p>
                    </div>
                    <p className="text-left text-sm">
                        {project.description}
                    </p>
                </div>
                <div className="flex gap-1 flex-wrap justify-left">
                    {project.techStack.map(ts => (
                        <span
                            key={ts}
                            className="rounded-full font-semibold text-xs py-0.5 px-2 bg-neutral-50 text-neutral-950"
                        >
                            {ts}
                        </span>
                    ))}
                </div>
                <div className="flex flex-col gap-1">
                    {project.links?.map(link => (
                        <a
                            key={link.display}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm flex items-center gap-1 italic hover:underline w-fit"
                        >
                            <link.icon /> {link.display}
                        </a>
                    ))}
                </div>
            </div>
        </article>
    );
};