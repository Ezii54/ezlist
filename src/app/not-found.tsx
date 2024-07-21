"use client";

import { FileMagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
   return (
      <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center flex-col">
         <div className="flex justify-center items-center flex-row">
            <div className="text-color-accent text-bold text-5xl">4</div>
            <FileMagnifyingGlass size={42} className="text-color-accent" />
            <div className="text-color-accent text-bold text-5xl">4</div>
         </div>
         <div className="flex justify-center items-center flex-col gap-3">
            <div className="text-color-accent text-bold text-2xl">
               Page Not Found
            </div>
            <Link
               href={"/"}
               className="text-color-primary hover:text-color-accent transition-all text-bold text-2xl underline"
            >
               Back to Homepage
            </Link>
         </div>
      </div>
   );
};

export default Page;
