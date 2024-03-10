import NavMenu from "@/app/_components/profile/nav-menu";
import Socials from "@/app/_components/profile/socials";
import Summary from "@/app/_components/profile/summary";

export default function Profile() {
    return (
        <div className="sticky top-0 flex flex-col gap-3 justify-around h-auto lg:h-dvh w-full lg:w-1/2 p-5 lg:p-10 bg-neutral-700">
            <Summary />
            <NavMenu />
            <Socials />
        </div>
    );
};