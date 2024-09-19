"use client";

import { useEffect, useState } from "react";
import ListAnime from "@/app/anime/components/Listing";
import Pagination from "@/libs/Pagination";
import { getResponAnimeAPI } from "@/libs/api";
import Loading from "@/app/loading";

const Page = ({ params: { id } }: { params: { id: any } }) => {
   const [page, setPage] = useState(1);
   const [isLoading, setIsLoading] = useState(true);

   interface AnimeResponse {
      data: any[];
      pagination: {
         last_visible_page: number;
      };
   }

   const [animeList, setAnimeList] = useState<AnimeResponse>({
      data: [],
      pagination: { last_visible_page: 1 },
   });

   const fetchData = async () => {
      setIsLoading(true);
      const animeList = await getResponAnimeAPI(
         "/anime",
         `letter=${id}&order_by=title&page=${page}&limit=24`
      );
      setAnimeList(animeList);
      setIsLoading(false);
   };

   useEffect(() => {
      fetchData();
   }, [page, id]);

   return (
      <>
         {isLoading ? (
            <Loading />
         ) : (
            <>
               <ListAnime api={animeList} title={""} linkHref="" linkTitle="" />
               <Pagination
                  page={page}
                  lastPage={animeList.pagination?.last_visible_page}
                  setPage={setPage}
               />
            </>
         )}
      </>
   );
};

export default Page;
