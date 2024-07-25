import type { Metadata } from "next";
import { Andika } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdSense from "@/components/AdSense/AdSense";

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
         <head>
            <AdSense pId="5631017031765660" />
         </head>
         <body
            className={`${andika.className} bg-color-secondary text-color-light`}
         >
            <Navbar />
            <div className="p-2">
               {children}
               <Footer />
            </div>
         </body>
      </html>
   );
}
