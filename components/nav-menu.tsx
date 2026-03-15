"use client";

import { Link } from "react-scroll";

import { Section } from "@/constants/section";

const sections = Object.values(Section);

export default function NavMenu() {
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
              className="flex gap-4 items-center w-fit hover:cursor-pointer capitalize"
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}