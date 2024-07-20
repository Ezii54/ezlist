import type { Metadata } from "next";
import { Andika } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const andika = Andika({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
   title: "ezList",
   description: "List Anime & Manga",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${andika.className} bg-color-dark text-color-primary`}
         >
            <Navbar />
            {children}
         </body>
      </html>
   );
}
