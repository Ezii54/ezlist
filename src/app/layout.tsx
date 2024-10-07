import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Andika } from "next/font/google";
const font = Andika({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
   title: "ezList",
   description: "ezList: Anime & Manga",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${font.className} antialiased bg-color-lg text-color-white p-1`}
         >
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
}
