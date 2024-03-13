import { StaticImageData } from "next/image";
import { IconType } from "react-icons/lib";
import { SiGithub, SiNotion } from "react-icons/si";
import { RiExternalLinkLine } from "react-icons/ri";

import TrelloClone from "@/../public/trello-clone.png";
import ChanKoh from "@/../public/chan-koh.png";
import CookingHome from "@/../public/cooking-home.png";
import LoveYourPlanet from "@/../public/love-your-planet.jpg";
import DeveloperJourneyMap from "@/../public/developer-journey-map.png";

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
        techStack: ["TypeScript", "React", "Tailwind CSS", "shadcn/ui", "Next.js", "Zustand", "Vercel"],
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
    },
    {
        title: "Cooking Home",
        description: "A mobile-first web application that provides a recipe search feature and offers recipe recommendations",
        startDate: "Oct 2023",
        endDate: "Dec 2023",
        techStack: ["JavaScript", "React", "MUI", "Redux Toolkit", "RTK Query", "Edamam API", "Node.js", "Express", "MongoDB", "Mongoose", "CI/CD", "AWS", "Github Actions"],
        thumbnail: CookingHome,
        links: [
            {
                display: "https://cooking-home.kro.kr",
                url: "https://cooking-home.kro.kr",
                icon: RiExternalLinkLine
            },
            {
                display: "github/cooking-home-frontend",
                url: "https://github.com/kohdc1723/cooking-home-frontend",
                icon: SiGithub
            },
            {
                display: "github/cooking-home-backend",
                url: "https://github.com/kohdc1723/cooking-home-backend",
                icon: SiGithub
            }
        ]
    },
    {
        title: "Love Your Planet Mobile App",
        description: "A mobile application, an easy-to-use social media for sustainability",
        startDate: "Apr 2023",
        endDate: "May 2023",
        techStack: ["JavaScript", "React Native", "Redux", "Node.js", "Express", "MongoDB", "Firebase", "Heroku"],
        thumbnail: LoveYourPlanet,
        links: [
            {
                display: "notion/love-your-planet-mobile-app",
                url: "https://stump-clavicle-74d.notion.site/Love-Your-Planet-Mobile-App-b6db8484bdb84548991dc0b169ebf4a7",
                icon: SiNotion
            }
        ]
    },
    {
        title: "Developer Journey Map",
        description: "A full-stack web application, a visualization tool identifies the path the developer experiences when learning or adopting new technologies",
        startDate: "Jan 2023",
        endDate: "Apr 2023",
        techStack: ["JavaScript", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose", "Firebase", "Google Cloud"],
        thumbnail: DeveloperJourneyMap,
        links: [
            {
                display: "notion/developer-journey-map",
                url: "https://stump-clavicle-74d.notion.site/Developer-Journey-Map-1811046303934666abf5cff0bd9f84e5",
                icon: SiNotion
            }
        ]
    }
];

export default projects;