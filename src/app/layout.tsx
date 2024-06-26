import { ReactNode } from "react";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    title: "Chan.Koh",
    description: "Chan Koh's portfolio website built with Next.js",
    icons: [
        {
            url: "/logo.ico",
            href: "/logo.ico"
        }
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-neutral-800 text-white">
                {children}
            </body>
        </html>
    );
};
