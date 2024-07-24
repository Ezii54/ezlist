"use client";

import { getDetAnimeAPI } from "@/libs/api";
import Image from "next/image";
import { formatDate } from "@/Utilities/FormatDate";

const Page = async ({ params: { id } }) => {
   const anime = await getDetAnimeAPI(`/anime/${id}`);

   return (
      <>
         <div>
            <p className="text-lg text-center">{anime.data.title}</p>
         </div>
         <div className="flex gap-2">
            <Image
               src={anime.data.images.webp.image_url}
               alt={anime.data.images.jpg.image_url}
               width={160}
               height={192}
               className="max-w-40 max-h-48 object-cover rounded"
            />
            <div className="flex flex-col gap-1">
               <div className="border border-color-dark bg-color-soft rounded p-1">
                  <p className="text-sm text-center">Statistics</p>
                  <hr className="text-color-dark text-opacity-80" />
                  <div className="text-xs">
                     <p className="">Score: {anime.data.score}</p>
                     <p className="">Ranked: #{anime.data.rank}</p>
                     <p className="">Popularity: #{anime.data.popularity}</p>
                  </div>
               </div>
               <div className="border border-color-dark bg-color-soft rounded p-1">
                  <p className="text-sm text-center">Information</p>
                  <hr className="text-color-dark text-opacity-80" />
                  <div className="text-xs">
                     <p className="">Episodes: {anime.data.episodes}</p>
                     <p className="">
                        Aired: {formatDate(anime.data.aired.from)}
                     </p>
                     <p className="">Status: {anime.data.status}</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="">
            <p className="text-md text-center">Synopsis</p>
            <p className="text-sm">{anime.data.synopsis}</p>
         </div>
      </>
   );
};

export default Page;
