"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ListMenu = ({ linkHref, linkImage, linkTitle }) => {
   const [loading, setLoading] = useState(true);

   const handleImageLoad = () => {
      setLoading(false);
   };

   return (
      <>
         <div className="flex text-center text-color-accent justify-center p-1">
            <Link href={linkHref} passHref className="relative hover:scale-105">
               {loading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-color-secondary rounded">
                     <div className="loader border-t-4 border-color-accent rounded-full w-6 h-6 animate-spin"></div>
                  </div>
               )}
               <Image
                  src={linkImage}
                  alt=""
                  priority
                  width={192}
                  height={108}
                  onLoad={handleImageLoad}
                  className="rounded"
               />
               <p className="absolute bottom-0 left-0 right-0 bg-color-dark bg-opacity-80 border-t border-color-dark rounded-b">
                  {linkTitle}
               </p>
            </Link>
         </div>
      </>
   );
};

export default ListMenu;
