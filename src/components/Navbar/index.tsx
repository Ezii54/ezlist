"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/libs/media/Logo.png";
import { UserCircle } from "@phosphor-icons/react";
import Sidebar from "@/components/Navbar/Sidebar";

const Navbar = () => {
   return (
      <>
         <div className="bg-color-primary border-b-2 border-b-color-dark border-opacity-65 sticky-navbar flex flex-row items-center justify-between p-1">
            <div>
               <Sidebar />
            </div>
            {/*<div>
               <Link href={"/"}>
                  <Image
                     src={Logo}
                     alt=""
                     width={32}
                     height={32}
                     className="rounded border border-color-accent hover:scale-105"
                  />
               </Link>
            </div>*/}
            <div>
               <UserCircle size={32} className="text-color-accent" />
            </div>
         </div>
      </>
   );
};

export default Navbar;
