import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import profile from "@/public/profile.png";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function Profile() {
  return (
    <section className="flex items-center gap-10 lg:gap-20">
      <Image
        src={profile}
        alt="profile"
        priority
        className="rounded-full size-32 md:size-36 lg:size-40 ring-2 ring-accent-foreground"
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold">
            Chan Koh
          </h1>
          <div className="flex flex-col font-medium">
            <p>
              Full Stack Developer @ VisaFlo
            </p>
            <p>
              CST @ BCIT
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon-lg"
              asChild
            >
              <Link
                href="https://www.linkedin.com/in/kohdc1723"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="size-6" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon-lg"
              asChild
            >
              <Link
                href="https://github.com/kohdc1723"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="size-6" />
              </Link>
            </Button>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </section>
  );
}