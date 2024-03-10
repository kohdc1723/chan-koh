import Image from "next/image";

import { EducationType } from "@/data/education";

interface EducationTypeProps {
    education: EducationType;
};

export default function EducationItem({
    education
}: EducationTypeProps) {
    return (
        <article className="flex gap-5 w-full">
            <Image
                src={education.logo}
                alt="logo"
                className="w-20 h-20"
            />
            <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <h4 className="font-black">
                        {education.degree}, {education.program}
                    </h4>
                    <h4 className="text-sm text-right text-neutral-300 font-bold">
                        {education.startDate} - {education.endDate}
                    </h4>
                </div>
                <div className="flex justify-between items-center">
                    <h4 className="font-black">
                        {education.school}
                    </h4>
                    <h4 className="text-sm text-right text-neutral-300 font-bold">
                        {education.location}
                    </h4>
                </div>
                <ul className="text-sm">
                    {education.details.map(detail => (
                        <li>● {detail}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
};