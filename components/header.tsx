import Profile from "@/components/profile";

export default function Header() {
  return (
    <header className="flex-1 static lg:sticky top-0 flex flex-col gap-3 justify-between h-fit lg:h-dvh p-5 lg:px-10 lg:py-20 z-10 border">
      <Profile />
    </header>
  )
}