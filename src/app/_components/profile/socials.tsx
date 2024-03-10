import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

export default function Socials() {
    return (
        <div className="flex gap-10">
            <SiLinkedin className="w-7 h-7 hover:cursor-pointer hover:text-white/75" />
            <SiGithub className="w-7 h-7 hover:cursor-pointer hover:text-white/75" />
            <SiGmail className="w-7 h-7 hover:cursor-pointer hover:text-white/75" />
        </div>
    );
};