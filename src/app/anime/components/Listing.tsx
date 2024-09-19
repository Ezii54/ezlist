"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Listing = ({
   api,
   title,
   linkHref,
   linkTitle,
}: {
   api: any;
   title: any;
   linkHref: any;
   linkTitle: any;
}) => {
   const [loading, setLoading] = useState(true);

   const handleImageLoad = () => {
      setLoading(false);
   };

   return (
      <div className="flex flex-col items-center justify-center mt-1">
         <div className="flex gap-2 mb-2 text-lg font-bold">
            <div className="font-bold text-color-light">{title}</div>
            {linkHref && linkTitle ? (
               <Link
                  href={linkHref}
                  passHref
                  className="text-color-accent hover:scale-105"
               >
                  {linkTitle}
               </Link>
            ) : linkHref == "" || linkTitle == "" ? null : null}
         </div>
         <div className="inline-grid grid-cols-2 gap-2 mb-1 text-center text-color-accent lg:grid-cols-6 md:grid-cols-3">
            {api.data?.map((anime: any, index: any) => (
               <Link
                  href={`/anime/${anime.mal_id}`}
                  passHref
                  key={index}
                  className="relative hover:scale-105"
               >
                  <div className="relative">
                     {loading && (
                        <div className="absolute inset-0 flex items-center justify-center rounded bg-color-md">
                           <div className="w-6 h-6 border-t-4 rounded-full loader border-color-accent animate-spin"></div>
                        </div>
                     )}
                     <Image
                        src={anime.images.webp.image_url}
                        alt=""
                        width={160}
                        height={192}
                        onLoad={handleImageLoad}
                        className="object-cover rounded max-w-40 max-h-48"
                        priority
                     />
                     <p className="absolute bottom-0 left-0 right-0 border-t rounded-b bg-color-xl bg-opacity-80 border-color-black">
                        {anime.title}
                     </p>
                  </div>
               </Link>
            ))}
         </div>
      </div>
   );
};

export default Listing;
