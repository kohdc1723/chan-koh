import Image from "next/image";

import { EducationType } from "@/data/education";

interface EducationTypeProps {
    education: EducationType;
};

export default function EducationItem({
    education
}: EducationTypeProps) {
    return (
        <article className="p-5 rounded-md flex flex-col gap-5 w-full backdrop-brightness-125 hover:backdrop-brightness-150">
            <div className="flex gap-5 justify-between items-start">
                <Image
                    src={education.logo}
                    alt="logo"
                    className="w-20 h-20 rounded-md"
                />

                <div className="h-full flex flex-col gap-1 flex-1 font-black">
                    <div className="flex flex-col">
                        <h4 className="text-left text-sm lg:text-base self-start">
                            {education.degree}, {education.program}
                        </h4>
                        <h4 className="text-right text-neutral-400 self-end text-xs lg:text-sm">
                            {education.startDate} - {education.endDate}
                        </h4>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-left text-sm lg:text-base self-start">
                            {education.school}
                        </h4>
                        <h4 className="text-right text-neutral-400 self-end text-xs lg:text-sm">
                            {education.location}
                        </h4>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-3">
                <ul className="text-sm">
                    {education.details.map((detail, index) => (
                        <li key={index}>● {detail}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
};