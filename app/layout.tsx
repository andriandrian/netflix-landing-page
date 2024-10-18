import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./ui/navbar";
import { inter } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Netflix Indonesia - Watch TV Shows Online, Watch Movies Online",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}
        className={`${inter.className} antialiased`}
      >
        <div className="absolute z-40 w-full">
          <Navbar />
        </div>
        <div className="relative z-0">

          {children}
        </div>
      </body>
    </html>
  );
}
