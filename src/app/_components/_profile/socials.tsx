import { SiGithub, SiLinkedin } from "react-icons/si";

import EmailButton from "@/app/_components/_profile/email-button";

export default function Socials() {
    return (
        <div className="flex gap-10">
            <a
                href="https://www.linkedin.com/in/kohdc1723"
                target="_blank"
                rel="noreferrer"
                className="hover:cursor-pointer hover:text-white/75"
            >
                <SiLinkedin className="w-5 h-5 lg:w-7 lg:h-7" />
            </a>
            <a
                href="https://github.com/kohdc1723"
                target="_blank"
                rel="noreferrer"
                className="hover:cursor-pointer hover:text-white/75"
            >
                <SiGithub className="w-5 h-5 lg:w-7 lg:h-7" />
            </a>
            <EmailButton />
        </div>
    );
};