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
            <div className="flex font-bold text-lg mb-2 gap-2">
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
            <div className="text-color-accent text-center gap-2 inline-grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 mb-1">
               {api.data?.map((anime, index) => (
                  <Link
                     href={`/anime/res/${anime.mal_id}`}
                     passHref
                     key={index}
                     className="relative hover:scale-105"
                  >
                     <div className="relative">
                        {loading && (
                           <div className="absolute inset-0 flex items-center justify-center bg-color-soft rounded">
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
                        <p className="absolute bottom-0 left-0 right-0 bg-color-dark bg-opacity-80 border-t border-color-dark rounded-b">
                           {anime.title_english}
                        </p>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </>
   );
};

export default ListAnime;
