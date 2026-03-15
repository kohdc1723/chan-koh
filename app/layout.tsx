import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import ThemeProvider from "@/components/theme-provider";
import Header from "@/components/header";
import "@/app/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Chan.Koh",
  description: "Personal website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col lg:flex-row px-0 lg:px-20">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
