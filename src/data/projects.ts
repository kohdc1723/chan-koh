import { StaticImageData } from "next/image";
import { IconType } from "react-icons/lib";
import { SiGithub, SiNotion } from "react-icons/si";
import { RiExternalLinkLine } from "react-icons/ri";

import TrelloClone from "@/../public/trello-clone.png";
import ChanKoh from "@/../public/chan-koh.png";

type LinkType = {
    display: string;
    url: string;
    icon: IconType;
};

export type ProjectType = {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    techStack: string[];
    thumbnail: StaticImageData;
    links?: LinkType[];
};

const projects: ProjectType[] = [
    {
        title: "Chan.Koh",
        description: "My portfolio website that presents my information and showcases my projects",
        startDate: "Mar 2024",
        endDate: "Mar 2024",
        techStack: ["TypeScript", "React", "Tailwind CSS", "Next.js", "Zustand", "Vercel"],
        thumbnail: ChanKoh,
        links: [
            {
                display: "https://trello-clone-kohdc.vercel.app",
                url: "https://trello-clone-kohdc.vercel.app",
                icon: RiExternalLinkLine
            },
            {
                display: "github/trello-clone",
                url: "https://github.com/kohdc1723/trello-clone",
                icon: SiGithub
            }
        ]
    },
    {
        title: "Trello Clone",
        description: "A full-stack web application that offers drag and drop task management service, cloned from Trello",
        startDate: "Feb 2024",
        endDate: "Feb 2024",
        techStack: ["TypeScript", "React", "shadcn/ui", "Next.js", "MySQL", "Prisma", "Zod", "Zustand", "React Query", "Vercel"],
        thumbnail: TrelloClone,
        links: [
            {
                display: "https://trello-clone-kohdc.vercel.app",
                url: "https://trello-clone-kohdc.vercel.app",
                icon: RiExternalLinkLine
            },
            {
                display: "github/trello-clone",
                url: "https://github.com/kohdc1723/trello-clone",
                icon: SiGithub
            }
        ]
    }
];

export default projects;