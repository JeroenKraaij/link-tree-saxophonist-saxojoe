import React from "react";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";


const lato = Lato({
    variable: "--font-lato",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Link Tree Saxophonist Saxojoe",
    description: "Follow my Link tree for the latest update on my music",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${lato.variable} antialiased`}>
            {children}
            </body>
        </html>
    );
}
