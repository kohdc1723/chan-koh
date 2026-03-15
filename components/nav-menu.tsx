"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { MousePointer2 } from "lucide-react";

import { Section } from "@/constants/section";

const sections = Object.values(Section);

export default function NavMenu() {
  const [currentSection, setCurrentSection] = useState<Section | null>(null);

  return (
    <nav className="hidden lg:block">
      <ul className="flex flex-col gap-2">
        {sections.map((section) => (
          <li key={section}>
            <Link
              to={section}
              delay={0}
              duration={500}
              smooth={true}
              spy={true}
              onSetActive={() => setCurrentSection(section)}
              className="flex gap-4 items-center w-fit hover:cursor-pointer"
            >
              <span className="capitalize">
                {section}
              </span>
              {section === currentSection && (
                <MousePointer2 className="size-4" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}