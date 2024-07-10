import Image from "next/image";

import { ExperienceType } from "@/data/experience";

interface ExperienceItemProps {
    experience: ExperienceType;
};

export default function ExperienceItem({
    experience
}: ExperienceItemProps) {
    return (
        <article className="p-5 rounded-md flex flex-col gap-5 w-full backdrop-brightness-125 hover:backdrop-brightness-150">
            <div className="flex gap-5 justify-between items-start">
                <Image
                    src={experience.logo}
                    alt="logo"
                    className="w-20 h-20 rounded-md bg-white"
                />

                <div className="h-full flex flex-col gap-1 flex-1 font-black">
                    <div className="flex flex-col">
                        <h4 className="text-left text-sm lg:text-base self-start">
                            {experience.position}
                        </h4>
                        <h4 className="text-right text-neutral-400 self-end text-xs lg:text-sm">
                            {experience.startDate} - {experience.endDate}
                        </h4>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-left text-sm lg:text-base self-start">
                            {experience.company}
                        </h4>
                        <h4 className="text-right text-neutral-400 self-end text-xs lg:text-sm">
                            {experience.location}
                        </h4>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-3">
                <ul className="text-sm">
                    {experience.details.map((detail, index) => (
                        <li
                            key={index}
                            className="flex gap-1"
                        >
                            <span>●</span>
                            <p>{detail}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full flex gap-1 flex-wrap">
                {experience.techStack.map(ts => (
                    <span
                        key={ts}
                        className="rounded-full font-semibold text-xs py-0.5 px-2 bg-neutral-50 text-neutral-950"
                    >
                        {ts}
                    </span>
                ))}
            </div>
        </article>
    );
};