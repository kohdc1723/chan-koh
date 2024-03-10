import { ReactNode } from "react";
import Profile from "../_components/profile";

export default function HomeLayout({
    children
}: {
    children: ReactNode
}) {
    return (
        <div className="flex flex-col lg:flex-row m-0 lg:mx-20">
            <Profile />
            {children}
        </div>
    );
};