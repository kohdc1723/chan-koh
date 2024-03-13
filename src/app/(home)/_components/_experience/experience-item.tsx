import Image from "next/image";

import { ExperienceType } from "@/data/experience";

interface ExperienceItemProps {
    experience: ExperienceType;
};

export default function ExperienceItem({
    experience
}: ExperienceItemProps) {
    return (
        <article className="p-5 rounded-md flex gap-5 w-full backdrop-brightness-125 hover:backdrop-brightness-150">
            <Image
                src={experience.logo}
                alt="logo"
                className="w-20 h-20 rounded-md hidden lg:block"
            />
            <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <h4 className="font-black">
                        {experience.position}
                    </h4>
                    <h4 className="text-sm text-neutral-300 font-bold">
                        {experience.startDate} - {experience.endDate}
                    </h4>
                </div>
                <div className="flex justify-between items-center">
                    <h4 className="font-black">
                        {experience.company}
                    </h4>
                    <h4 className="text-sm text-neutral-300 font-bold">
                        {experience.location}
                    </h4>
                </div>
                <ul className="text-sm">
                    {experience.details.map((detail, index) => (
                        <li key={index}>● {detail}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
};