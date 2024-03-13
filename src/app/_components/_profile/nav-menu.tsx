"use client";

import { Link } from "react-scroll";
import { FaLocationArrow } from "react-icons/fa";
import { useMediaQuery } from "usehooks-ts";

import useSection from "@/hooks/use-section";
import sections from "@/data/sections";

export default function NavMenu() {
    const { section, setSection } = useSection();

    const isAboveLarge = useMediaQuery("(min-width: 1024px)", {
        initializeWithValue: false
    });

    if (!isAboveLarge) return null;

    return (
        <nav className="flex flex-col gap-3">
            {sections.map((sec, index) => (
                <span key={index} className="w-fit text-lg font-bold">
                    <Link
                        to={sec.id}
                        delay={0}
                        duration={500}
                        smooth={true}
                        spy={true}
                        className="flex gap-3 items-center w-fit text-neutral-50 hover:cursor-pointer hover:text-neutral-50/75"
                        onSetActive={() => setSection(sec.value)}
                    >
                        {sec.title}
                        {(section === sec.value) && (
                            <FaLocationArrow className="text-sm" />
                        )}
                    </Link>
                </span>
            ))}
        </nav>
    );
};