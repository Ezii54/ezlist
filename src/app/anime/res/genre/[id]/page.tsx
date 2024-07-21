"use client";

import { useEffect, useState } from "react";
import ListAnime from "@/app/anime/components/ListAnime";
import HeaderMenu from "@/Utilities/HeaderMenu";
import Pagination from "@/Utilities/Pagination";
import { getResAnimeAPI } from "@/libs/api";
import Loading from "@/app/loading";

const Page = async ({ params: { id } }) => {
   const [page, setPage] = useState(1);
   const [isLoading, setIsLoading] = useState(true);

   interface AnimeResponse {
      data: any[];
      pagination: {
         last_visible_page: number;
      };
   }

   const [genAnime, setGenAnime] = useState<AnimeResponse>({
      data: [],
      pagination: { last_visible_page: 1 },
   });

   const fetchData = async () => {
      setIsLoading(true);
      const genAnime = await getResAnimeAPI(
         "/anime",
         `genres=${id} & page=${page} & limit=24`
      );
      setGenAnime(genAnime);
      setIsLoading(false);
   };

   useEffect(() => {
      fetchData();
   }, [page]);

   return (
      <div>
         <HeaderMenu title={`Search by Genre [Page: ${page}]`} />
         {isLoading ? (
            <Loading />
         ) : (
            <>
               <ListAnime api={genAnime} title={""} linkHref="" linkTitle="" />
               <br />
               <Pagination
                  page={page}
                  lastPage={genAnime.pagination?.last_visible_page}
                  setPage={setPage}
               />
            </>
         )}
      </div>
   );
};

export default Page;
