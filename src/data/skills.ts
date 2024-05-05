import { IconType } from "react-icons/lib";
import { FaJava } from "react-icons/fa";
import { SiHtml5, SiCss3, SiC, SiCplusplus, SiCsharp, SiJavascript, SiTypescript, SiReact, SiRedux, SiReactquery, SiFramer, SiTailwindcss, SiNodedotjs, SiNextdotjs, SiExpress, SiNestjs, SiSpringboot, SiDotnet, SiFirebase, SiMysql, SiMongodb, SiMongoose, SiHibernate, SiPrisma, SiMicrosoftsqlserver, SiGit, SiGithubactions, SiAmazonaws, SiAwslambda, SiAmazonec2, SiAmazons3, SiAmazonapigateway, SiAmazonroute53 } from "react-icons/si";

export type SkillType = {
    skill: string;
    logo?: IconType;
    bgColor: string;
    textColor: string;
};

export type SkillDataType = {
    category: string;
    skills: SkillType[];
};

const skills: SkillDataType[] = [
    {
        category: "Programming languages",
        skills: [
            { skill: "HTML5", logo: SiHtml5, bgColor: "#E34F26", textColor: "#FFFFFF" },
            { skill: "CSS3", logo: SiCss3, bgColor: "#1572B6", textColor: "#FFFFFF" },
            { skill: "JavaScript", logo: SiJavascript, bgColor: "#F7DF1E", textColor: "#000000" },
            { skill: "TypeScript", logo: SiTypescript, bgColor: "#3178C6", textColor: "#FFFFFF" },
            { skill: "C", logo: SiC, bgColor: "#A8B9CC", textColor: "#000000" },
            { skill: "C++", logo: SiCplusplus, bgColor: "#00599C", textColor: "#FFFFFF" },
            { skill: "C#", logo: SiCsharp, bgColor: "#512BD4", textColor: "#FFFFFF" },
            { skill: "Java", logo: FaJava, bgColor: "#5382A1", textColor: "#FFFFFF" }
        ]
    },
    {
        category: "Front-End",
        skills: [
            { skill: "React", logo: SiReact, bgColor: "#61DAFB", textColor: "#000000" },
            { skill: "Next.js", logo: SiNextdotjs, bgColor: "#000000", textColor: "#FFFFFF" },
            { skill: "Redux", logo: SiRedux, bgColor: "#764ABC", textColor: "#FFFFFF" },
            { skill: "RTK Query", logo: SiRedux, bgColor: "#764ABC", textColor: "#FFFFFF" },
            { skill: "Zustand", bgColor: "#5382A1", textColor: "#FFFFFF" },
            { skill: "Tanstack React Query", logo: SiReactquery, bgColor: "#FF4154", textColor: "#FFFFFF" },
            { skill: "shadcn/ui", bgColor: "#000000", textColor: "#FFFFFF" },
            { skill: "Framer", logo: SiFramer, bgColor: "#0055FF", textColor: "#FFFFFF" },
            { skill: "Tailwind CSS", logo: SiTailwindcss, bgColor: "#06B6D4", textColor: "#FFFFFF" }
        ]
    },
    {
        category: "Back-End",
        skills: [
            { skill: "Node.js", logo: SiNodedotjs, bgColor: "#339933", textColor: "#FFFFFF" },
            { skill: "Express.js", logo: SiExpress, bgColor: "#000000", textColor: "#FFFFFF" },
            { skill: "Nest.js", logo: SiNestjs, bgColor: "#E0234E", textColor: "#FFFFFF" },
            { skill: "Spring Boot", logo: SiSpringboot, bgColor: "#6DB33F", textColor: "#FFFFFF" },
            { skill: "ASP.NET Core", logo: SiDotnet, bgColor: "#512BD4", textColor: "#FFFFFF" },
            { skill: "Firebase", logo: SiFirebase, bgColor: "#FFCA28", textColor: "#000000" }
        ]
    },
    {
        category: "Databases",
        skills: [
            { skill: "MySQL", logo: SiMysql, bgColor: "#4479A1", textColor: "#FFFFFF" },
            { skill: "Microsoft SQL Server", logo: SiMicrosoftsqlserver, bgColor: "#CC2927", textColor: "#FFFFFF" },
            { skill: "MongoDB", logo: SiMongodb, bgColor: "#47A248", textColor: "#FFFFFF" },
            { skill: "Prisma", logo: SiPrisma, bgColor: "#2D3748", textColor: "#FFFFFF" },
            { skill: "Mongoose", logo: SiMongoose, bgColor: "#880000", textColor: "#FFFFFF" },
            { skill: "JPA Hibernate", logo: SiHibernate, bgColor: "#59666C", textColor: "#FFFFFF" }
        ]
    },
    {
        category: "DevOps",
        skills: [
            { skill: "Git", logo: SiGit, bgColor: "#F05032", textColor: "#FFFFFF" },
            { skill: "Github Actions", logo: SiGithubactions, bgColor: "#2088FF", textColor: "#FFFFFF" },
            { skill: "CI/CD", bgColor: "#5382A1", textColor: "#FFFFFF" },
            { skill: "Amazon EC2", logo: SiAmazonec2, bgColor: "#FF9900", textColor: "#FFFFFF" },
            { skill: "Amazon S3", logo: SiAmazons3, bgColor: "#569A31", textColor: "#FFFFFF" },
            { skill: "Amazon CloudFront", logo: SiAmazonaws, bgColor: "#FF9900", textColor: "#FFFFFF" },
            { skill: "AWS Lambda", logo: SiAwslambda, bgColor: "#FF9900", textColor: "#FFFFFF" },
            { skill: "Amazon API Gateway", logo: SiAmazonapigateway, bgColor: "#FF4F8B", textColor: "#FFFFFF" },
            { skill: "Amazon Route 53", logo: SiAmazonroute53, bgColor: "#8C4FFF", textColor: "#FFFFFF" }
        ]
    }
];

export default skills;