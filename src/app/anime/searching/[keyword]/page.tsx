"use client";

import { useEffect, useState } from "react";
import { getResAnimeAPI } from "@/libs/api";
import ListAnime from "@/app/anime/components/ListAnime";
import Pagination from "@/Utilities/Pagination";
import Loading from "@/app/loading";

const Page = ({ params }) => {
   const [page, setPage] = useState(1);
   const [isLoading, setIsLoading] = useState(true);

   interface AnimeResponse {
      data: any[];
      pagination: {
         last_visible_page: number;
      };
   }

   const [searchAnime, setPopAnime] = useState<AnimeResponse>({
      data: [],
      pagination: { last_visible_page: 1 },
   });

   const { keyword } = params;
   const decKeyword = decodeURI(keyword);

   const fetchData = async () => {
      setIsLoading(true);
      const searchAnime = await getResAnimeAPI(
         "/anime",
         `q=${decKeyword} & page=${page} & limit=24`
      );
      setPopAnime(searchAnime);
      setIsLoading(false);
   };

   useEffect(() => {
      fetchData();
   }, [page]);

   return (
      <>
         <section>
            {isLoading ? (
               <Loading />
            ) : (
               <div>
                  <ListAnime
                     api={searchAnime}
                     title={`Search Results for "${decKeyword}"`}
                     linkHref={""}
                     linkTitle={""}
                  />
                  <Pagination
                     page={page}
                     lastPage={searchAnime.pagination?.last_visible_page}
                     setPage={setPage}
                  />
               </div>
            )}
         </section>
      </>
   );
};

export default Page;
