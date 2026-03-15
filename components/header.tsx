import Profile from "@/components/profile";
import NavMenu from "@/components/nav-menu";

export default function Header() {
  return (
    <header className="sticky top-0 flex flex-col gap-3 justify-between w-full lg:w-1/2 h-fit lg:h-dvh p-5 lg:px-10 lg:py-20 z-10 border-b lg:border-none shadow-lg lg:shadow-none bg-background">
      <Profile />
      <NavMenu />
    </header>
  )
}