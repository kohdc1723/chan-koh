import { StaticImageData } from "next/image";

import BCIT from "@/../public/bcit.jpeg";

export type EducationType = {
    school: string;
    logo: StaticImageData;
    degree: string;
    program: string;
    location: string;
    startDate: string;
    endDate: string;
    details: string[];
};

const education: EducationType[] = [
    {
        school: "British Columbia Institute of Technology",
        logo: BCIT,
        degree: "Diploma",
        program: "Computer Systems Technology",
        location: "Burnaby, BC, Canada",
        startDate: "Sep 2021",
        endDate: "Jun 2023",
        details: [
            "Information Systems option",
            "Graduated with distinction"
        ]
    }
];

export default education;