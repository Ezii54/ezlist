"use client";

import { useEffect, useState } from "react";
import ListAnime from "@/app/anime/components/ListAnime";
import HeaderMenu from "@/Utilities/HeaderMenu";
import Pagination from "@/Utilities/Pagination";
import { getResAnimeAPI } from "@/libs/api";
import Loading from "@/app/loading";

const Page = ({ params: { id } }) => {
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
      const animeList = await getResAnimeAPI(
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
      <div>
         <HeaderMenu
            title={`Search by Letter: ${id.toUpperCase()} [Page: ${page}]`}
         />
         {isLoading ? (
            <Loading />
         ) : (
            <>
               <ListAnime api={animeList} title={""} linkHref="" linkTitle="" />
               <br />
               <Pagination
                  page={page}
                  lastPage={animeList.pagination?.last_visible_page}
                  setPage={setPage}
               />
            </>
         )}
      </div>
   );
};

export default Page;
