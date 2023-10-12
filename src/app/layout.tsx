import "./globals.css";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import React from "react";
import Header from "./components/header";
import Nav from "./components/nav";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Polletto - Home",
  description: "Personal website of Polletto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inconsolata.className} text-base`}>
        <Header />
        <Nav links={[{ name: "Home", url: "/" }]} />
        <main className="flex min-h-screen flex-col items-center ml-0 lg:ml-72 lg:w-[calc(100%-288px)] py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
