import { IconType } from "react-icons/lib";
import { FaJava } from "react-icons/fa";
import { SiC, SiCplusplus, SiCsharp, SiJavascript, SiTypescript } from "react-icons/si";
import { ReactNode } from "react";

export type SkillType = {
    skill: string;
    logo: IconType;
};

export type SkillDataType = {
    category: string;
    skills: SkillType[];
};

const skills: SkillDataType[] = [
    {
        category: "Programming languages",
        skills: [
            { skill: "C", logo: SiC },
            { skill: "C++", logo: SiCplusplus },
            { skill: "C#", logo: SiCsharp },
            { skill: "Java", logo: FaJava },
            { skill: "JavaScript", logo: SiJavascript },
            { skill: "TypeScript", logo: SiTypescript },
        ]
    }
];

export default skills;