import NavMenu from "@/app/_components/_profile/nav-menu";
import Summary from "@/app/_components/_profile/summary";

export default function Profile() {
    return (
        <div className="static lg:sticky top-0 flex flex-col gap-3 justify-between h-fit lg:h-dvh w-full lg:w-1/2 p-5 lg:px-10 lg:py-20 shadow-lg shadow-neutral-900 lg:shadow-none bg-neutral-800 z-50">
            <Summary />
            <NavMenu />
        </div>
    );
};