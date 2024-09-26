"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ListMenu = ({
   pictHref,
   linkHref,
   titleHref,
}: {
   pictHref: any;
   linkHref: any;
   titleHref: any;
}) => {
   const [loading, setLoading] = useState(true);

   const handleImageLoad = () => {
      setLoading(false);
   };
   return (
      <div className="flex items-center justify-center text-center text-color-accent">
         <Link href={linkHref} passHref className="relative hover:scale-105">
            <div className="relative">
               {loading && (
                  <div className="absolute inset-0 flex items-center justify-center rounded bg-color-md">
                     <div className="w-6 h-6 border-t-4 rounded-full loader border-color-accent animate-spin"></div>
                  </div>
               )}
               <Image
                  src={pictHref}
                  alt=""
                  width={250}
                  height={100}
                  onLoad={handleImageLoad}
                  priority
               />
               <p className="absolute bottom-0 left-0 right-0 border-t rounded-b bg-color-xl bg-opacity-80 border-color-black">
                  {titleHref}
               </p>
            </div>
         </Link>
      </div>
   );
};

export default ListMenu;
