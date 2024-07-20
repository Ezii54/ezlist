"use client";

import "@/app/globals.css";
import { useState } from "react";
import { List } from "@phosphor-icons/react";
import Link from "next/link";

const Sidebar = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
   };

   return (
      <>
         <div className={`sidebar ${isSidebarOpen ? "" : "sidebar-hidden"}`}>
            <div className="p-2 border-r border-color-accent h-full text-lg flex">
               <div className="flex flex-col">
                  <button onClick={toggleSidebar}>
                     <Link href={"/"} className="hover:text-color-accent">
                        Homepage
                     </Link>
                  </button>
                  <button onClick={toggleSidebar}>
                     <Link href={"/anime"} className="hover:text-color-accent">
                        List Anime
                     </Link>
                  </button>
               </div>
            </div>
         </div>
         <div
            className={`main-content ${
               isSidebarOpen ? "" : "content-expanded"
            }`}
         >
            <button onClick={toggleSidebar} className="flex">
               <List size={32} weight="bold" />
            </button>
         </div>
      </>
   );
};

export default Sidebar;
