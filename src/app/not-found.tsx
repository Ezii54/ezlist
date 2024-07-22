"use client";

import { FileMagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
   return (
      <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center flex-col">
         <div className="flex justify-center items-center flex-row">
            <div className="text-bold text-5xl flex flex-row">
               4{<FileMagnifyingGlass size={42} className="" />}4
            </div>
         </div>
         <div className="flex justify-center items-center flex-col gap-3">
            <div className="text-bold text-2xl">Page Not Found</div>
            <Link href={"/"} className="text-color-accent hover:scale-105">
               Back to Homepage
            </Link>
         </div>
      </div>
   );
};

export default Page;
