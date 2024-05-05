import { StaticImageData } from "next/image";

import LYPF from "@/../public/lypf.jpeg";
import DevRel from "@/../public/devrel.jpeg";
import TOrder from "@/../public/torder.jpg";

export type ExperienceType = {
    company: string;
    logo: StaticImageData;
    position: string;
    type: string;
    location: string;
    startDate: string;
    endDate: string;
    details: string[];
    techStack: string[];
    projectUrl?: string;
};

const experience: ExperienceType[] = [
    {
        company: "t'order",
        logo: TOrder,
        position: "Jr. IT Support Technician",
        type: "Permanent, Full-time",
        location: "Vancouver, BC, Canada (On-site)",
        startDate: "Apr 2024",
        endDate: "Present",
        details: [],
        techStack: [
            "JavaScript",
            "React Native",
            "Node.js",
            "Express",
            "MongoDB",
            "Redux",
            "Firebase",
            "Heroku"
        ]
    },
    {
        company: "Love Your Planet Foundation",
        logo: LYPF,
        position: "Software Developer, Co-op",
        type: "Contract, Full-time",
        location: "Chilliwack, BC, Canada (Remote)",
        startDate: "Apr 2023",
        endDate: "May 2023",
        details: [
            "BCIT ISSP (Industry Sponsored Student Project) program",
            "Developed a Love Your Planet Mobile App, an easy-to-use social media for sustainability",
            "Modified the UI based on the client requirements",
            "Implemented a bill tracking feature that allows users to search for environmental bills and track their progress",
            "Debugged the existing issues in the register and login processes"
        ],
        techStack: [
            "JavaScript",
            "React Native",
            "Node.js",
            "Express",
            "MongoDB",
            "Redux",
            "Firebase",
            "Heroku"
        ],
        projectUrl: "https://stump-clavicle-74d.notion.site/Love-Your-Planet-Mobile-App-b6db8484bdb84548991dc0b169ebf4a7"
    },
    {
        company: "DevRel.Agency",
        logo: DevRel,
        position: "Software Developer, Co-op",
        type: "Contract, Part-time",
        location: "Vancouver, BC, Canada (Remote)",
        startDate: "Jan 2023",
        endDate: "Apr 2023",
        details: [
            "BCIT ISSP (Industry Sponsored Student Project) program",
            "Developed a Developer Journey Map, a visualization tool identifies the path the developer experiences",
            "Developed a RESTful API using Express framework and MongoDB",
            "Designed the UI and implemented it using React library",
            "Deployed the service on Google Cloud"
        ],
        techStack: [
            "JavaScript",
            "React.js",
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "Firebase",
            "Google Cloud"
        ],
        projectUrl: "https://stump-clavicle-74d.notion.site/Developer-Journey-Map-1811046303934666abf5cff0bd9f84e5"
    }
];

export default experience;