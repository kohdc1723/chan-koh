import { StaticImageData } from "next/image";

import LYPF from "@/../public/lypf.jpeg";
import DevRel from "@/../public/devrel.jpeg";
import TOrder from "@/../public/torder.jpg";
import VisaFlo from "@/../public/visaflo-logo.png";

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
    websiteUrl: string;
};

const experience: ExperienceType[] = [
    {
        company: "Visaflo",
        logo: VisaFlo,
        position: "Full-stack Developer",
        type: "Permanent, Full-time",
        location: "Vancouver, BC, Canada (Hybrid)",
        startDate: "Jul 2024",
        endDate: "Present",
        details: [],
        techStack: [
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "Firebase",
            "Tailwind CSS"
        ],
        websiteUrl: "https://vflo.app"
    },
    {
        company: "t'order",
        logo: TOrder,
        position: "Junior IT Technician",
        type: "Contract, Full-time",
        location: "Vancouver, BC, Canada (On-site)",
        startDate: "Apr 2024",
        endDate: "Jul 2024",
        details: [
            "Integrated tablet ordering software with clients' POS systems to ensure tablet orders are linked to their POS systems",
            "Troubleshot issues regarding POS systems and tablet ordering systems reported by clients",
            "Provided remote technical support for clients' requests using Anydesk and TeamViewer",
            "Installed and configured printers and network routers",
        ],
        techStack: [
            "Networking",
            "Troubleshooting",
            "Problem Solving",
            "Technical Support",
            "POS systems",
            "Anydesk",
            "TeamViewer"
        ],
        websiteUrl: "https://global.torder.com/main"
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
            "Contributed to the Love Your Planet's project, developing an easy-to-use mobile social media for sustainability",
            "Implemented a bill tracker enabling users to search for environmental bills and track their progress",
            "Modified about 50% of UI components to meet HIG (Human Interface Guidelines) in preparation for App Store release",
            "Debugged existing issues, resulting in the resolution of 60% of the bugs"
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
        projectUrl: "https://stump-clavicle-74d.notion.site/Love-Your-Planet-Mobile-App-b6db8484bdb84548991dc0b169ebf4a7",
        websiteUrl: "https://www.loveyourplanet.earth"
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
            "Collaborated with a team of five to develop the full-stack web application \"Developer Journey Map\" from scratch",
            "Developed a RESTful API using Express.js and MongoDB for backend functionality",
            "Implemented Google account authentication with Firebase, simplifying the signup and login process",
            "Successfully deployed the application on Google Cloud Platform, ensuring the service operates smoothly"
        ],
        techStack: [
            "JavaScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "Firebase",
            "Google Cloud"
        ],
        projectUrl: "https://stump-clavicle-74d.notion.site/Developer-Journey-Map-1811046303934666abf5cff0bd9f84e5",
        websiteUrl: "https://www.devrel.agency"
    }
];

export default experience;