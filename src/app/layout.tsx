import { ReactNode } from "react";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    title: "Chan.Koh",
    description: "Chan Koh's portfolio website built with Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-neutral-900 text-white">
                {children}
            </body>
        </html>
    );
};
