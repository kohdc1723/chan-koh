import NavMenu from "@/app/_components/profile/nav-menu";
import Socials from "@/app/_components/profile/socials";
import Summary from "@/app/_components/profile/summary";

export default function Profile() {
    return (
        <div className="sticky top-0 flex flex-col gap-3 justify-between h-auto lg:h-dvh w-full lg:w-1/2 p-5 lg:px-10 lg:py-20 shadow-lg lg:shadow-none bg-neutral-800">
            <Summary />
            <NavMenu />
            <Socials />
        </div>
    );
};