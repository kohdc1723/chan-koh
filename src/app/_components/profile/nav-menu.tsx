"use client";

import { useMediaQuery } from "usehooks-ts";

export default function NavMenu() {
    const isAboveLarge = useMediaQuery("(min-width: 1024px)", {
        defaultValue: false,
        initializeWithValue: false
    });

    if (!isAboveLarge) return null;

    return (
        <nav>
            <ul className="flex flex-col gap-1">
                <li>About</li>
                <li>Experience</li>
                <li>Education</li>
                <li>Projects</li>
                <li>Skills</li>
            </ul>
        </nav>
    );
};