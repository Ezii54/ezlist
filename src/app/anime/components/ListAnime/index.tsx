"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const ListAnime = ({ api, title, linkHref, linkTitle }) => {
   const [loading, setLoading] = useState(true);

   const handleImageLoad = () => {
      setLoading(false);
   };

   return (
      <>
         <div className="flex flex-col justify-center items-center mt-1">
            <div className="flex font-bold text-xl mb-2 gap-2">
               <div className="font-bold text-color-primary">{title}</div>
               {linkHref && linkTitle ? (
                  <Link
                     href={linkHref}
                     className="text-color-primary hover:text-color-accent"
                  >
                     {linkTitle}
                  </Link>
               ) : linkHref == "" || linkTitle == "" ? null : null}
            </div>
            <div className="gap-2 inline-grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 mb-1">
               {api.data?.map((anime, index) => (
                  <Link
                     href={`/anime/res/${anime.mal_id}`}
                     key={index}
                     className="text-color-primary hover:text-color-accent cursor-pointer transition-all relative"
                  >
                     <div className="relative">
                        {loading && (
                           <div className="absolute inset-0 flex items-center justify-center bg-color-secondary rounded">
                              <div className="loader border-t-4 border-color-accent rounded-full w-6 h-6 animate-spin"></div>
                           </div>
                        )}
                        <Image
                           src={anime.images.webp.image_url}
                           alt=""
                           width={160}
                           height={192}
                           onLoad={handleImageLoad}
                           className="max-w-40 max-h-48 rounded object-cover"
                           priority
                        />
                        <div>
                           <p className="absolute bottom-0 left-0 right-0 text-md text-center bg-color-dark bg-opacity-70 rounded">
                              {anime.title}
                           </p>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </>
   );
};

export default ListAnime;
