import Image from "next/image";

import ProfileImage from "@/../public/profile.png";
import Socials from "@/app/_components/_profile/socials";

export default function Summary() {
    return (
        <div className="flex items-center gap-10">
            <Image
                src={ProfileImage}
                alt="profile"
                priority
                className="w-32 h-32 lg:w-36 lg:h-36 rounded-full"
            />
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl lg:text-3xl font-black">Dong-chan Koh</h1>
                    <h2 className="text-base lg:text-lg font-bold">Software Developer</h2>
                    <h3 className="text-sm lg:text-base font-medium">CST @ BCIT 2023</h3>
                </div>
                
                <Socials />
            </div>
        </div>
    );
};