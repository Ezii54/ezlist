"use client";

import { getDetAnimeAPI } from "@/libs/api";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
   const anime = await getDetAnimeAPI(`/anime/${id}`);

   return (
      <div className="text-color-primary p-2">
         <div className="text-xl">
            {anime.data.title} - (
            {anime.data.year == null ? "Unknown" : anime.data.year})
         </div>
         <div className="flex flex-row">
            <div className="flex flex-col">
               <Image
                  src={anime.data.images.webp.image_url}
                  alt={anime.data.images.jpg.image_url}
                  width={160}
                  height={192}
                  className="max-w-40 max-h-48 rounded object-cover mb-2 mt-2"
               />
               <hr />
               <p className="text-center text-sm py-1">Information</p>
               <hr />
               <div className="text-xs px-2">
                  <p className="flex mt-1">Score: {anime.data.score}</p>
                  <p className="flex mt-1">Ranked: #{anime.data.rank}</p>
                  <p className="flex mt-1">
                     Popularity: #{anime.data.popularity}
                  </p>
                  <p className="flex mt-1">Episodes: {anime.data.episodes}</p>
                  <p className="flex mt-1">Status: {anime.data.status}</p>
                  <p className="flex mt-1">Aired: {anime.data.aired.from}</p>
               </div>
            </div>
            <div className="px-2">
               <p className="text-lg">Synopsis: </p>
               <p>{anime.data.synopsis}</p>
            </div>
         </div>
      </div>
   );
};

export default Page;
