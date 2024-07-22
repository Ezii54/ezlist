"use client";

import { useState } from "react";
import "@/app/globals.css";
import { SidebarSimple } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/libs/media/Logo.png";

const pageSidebar = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
   };

   /**
 <div className={`sidebar ${isSidebarOpen ? "" : "sidebar-hidden"}`}>
            <div className="text-color-primary px-2">
               <div className="flex items-center gap-2 py-2">
                  <Image
                     src={Logo}
                     alt=""
                     width={32}
                     height={32}
                     className="rounded"
                  />
                  <p className="text-xl font-bold">ezList</p>
               </div>
               <hr />
               <div className="mb-1">
                  <button
                     onClick={toggleSidebar}
                     className="hover:text-color-accent"
                  >
                     <Link href={"/"}>Homepage</Link>
                  </button>
               </div>
               <hr />
               <div className="py-2">
                  <p className="text-xl text-center">[Anime]</p>
                  <div className="text-md text-color-primary">
                     <button
                        onClick={toggleSidebar}
                        className="hover:text-color-accent flex"
                     >
                        <Link href={"/anime"}>List Anime</Link>
                     </button>
                  </div>
               </div>
               <hr />
            </div>
         </div>
         <div
            className={`main-content ${
               isSidebarOpen ? "" : "content-expanded"
            }`}
         >
            <button onClick={toggleSidebar} className="flex gap-2">
               <SidebarSimple size={32} className="text-color-accent" />
            </button>
         </div>
 */

   return (
      <>
         <div
            className={`sidebar ${
               isSidebarOpen ? "" : "sidebar-hidden"
            } border border-color-dark border-opacity-80`}
         >
            <div></div>
            {/* content */}
         </div>
         <div
            className={`main-content ${
               isSidebarOpen ? "" : "content-expanded"
            }`}
         >
            <button onClick={toggleSidebar} className="flex items-center">
               <SidebarSimple
                  size={32}
                  className="text-color-accent hover:scale-105"
               />
            </button>
         </div>
      </>
   );
};

export default pageSidebar;
