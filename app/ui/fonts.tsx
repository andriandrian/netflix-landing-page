import { Inter } from 'next/font/google';
import { Open_Sans } from "next/font/google";

export const inter = Inter({ subsets: ['latin'] });
export const open_sans = Open_Sans({
    weight: "variable",
    style: ["italic", "normal"],
    display: "swap",
    subsets: ["latin"],
    variable: "--open-sans-font",
});