"use client";

import { useEffect, useState } from "react";
import ListAnime from "@/app/anime/components/ListAnime";
import HeaderMenu from "@/Utilities/HeaderMenu";
import Pagination from "@/Utilities/Pagination";
import { getResAnimeAPI } from "@/libs/api";
import Loading from "@/app/loading";

const Populer = () => {
   const [page, setPage] = useState(1);
   const [isLoading, setIsLoading] = useState(true);

   interface AnimeResponse {
      data: any[];
      pagination: {
         last_visible_page: number;
      };
   }

   const [popAnime, setPopAnime] = useState<AnimeResponse>({
      data: [],
      pagination: { last_visible_page: 1 },
   });

   const fetchData = async () => {
      setIsLoading(true);
      const popAnime = await getResAnimeAPI(
         "/top/anime",
         `page=${page} & limit=24`
      );
      setPopAnime(popAnime);
      setIsLoading(false);
   };

   useEffect(() => {
      fetchData();
   }, [page]);

   return (
      <div>
         <HeaderMenu title={`Most Popular`} />
         {isLoading ? (
            <Loading />
         ) : (
            <>
               <ListAnime api={popAnime} title={""} linkHref="" linkTitle="" />
               <br />
               <Pagination
                  page={page}
                  lastPage={popAnime.pagination?.last_visible_page}
                  setPage={setPage}
               />
            </>
         )}
      </div>
   );
};

export default Populer;
