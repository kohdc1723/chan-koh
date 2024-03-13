import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import Profile from "../_components/_profile/profile";

export default function HomeLayout({
    children
}: {
    children: ReactNode
}) {
    return (
        <div className="flex flex-col lg:flex-row m-0 lg:mx-20">
            <Profile />
            {children}
            <Toaster />
        </div>
    );
};