import Image from "next/image";

import { EducationType } from "@/data/education";

interface EducationTypeProps {
    education: EducationType;
};

export default function EducationItem({
    education
}: EducationTypeProps) {
    return (
        <article className="p-5 rounded-md flex gap-5 w-full backdrop-brightness-125 hover:backdrop-brightness-150">
            <Image
                src={education.logo}
                alt="logo"
                className="w-20 h-20 rounded-md hidden lg:block"
            />
            <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <h4 className="font-black">
                        {education.degree}, {education.program}
                    </h4>
                    <h4 className="text-sm text-neutral-300 font-bold">
                        {education.startDate} - {education.endDate}
                    </h4>
                </div>
                <div className="flex justify-between items-center">
                    <h4 className="font-black">
                        {education.school}
                    </h4>
                    <h4 className="text-sm text-neutral-300 font-bold">
                        {education.location}
                    </h4>
                </div>
                <ul className="text-sm">
                    {education.details.map((detail, index) => (
                        <li key={index}>● {detail}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
};