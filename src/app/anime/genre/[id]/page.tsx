"use client";

import { useEffect, useState } from "react";
import ListAnime from "@/app/anime/components/Listing";
import Pagination from "@/libs/Pagination";
import { getResponAnimeAPI } from "@/libs/api";
import Loading from "@/app/loading";

const Page = ({ params: { id } }: { params: { id: any } }) => {
   const [page, setPage] = useState(1);
   const [isLoading, setIsLoading] = useState(true);
   const [genAnime, setGenAnime] = useState({
      data: [],
      pagination: { last_visible_page: 1 },
   });

   const fetchData = async () => {
      setIsLoading(true);
      try {
         const genAnimeResponse = await getResponAnimeAPI(
            "/anime",
            `genres=${id}&page=${page}&limit=24`
         );
         setGenAnime(genAnimeResponse);
      } catch (error) {
         console.error("Error fetching data:", error);
      } finally {
         setIsLoading(false);
      }
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
               <ListAnime api={genAnime} title={""} linkHref="" linkTitle="" />
               <Pagination
                  page={page}
                  lastPage={genAnime.pagination?.last_visible_page}
                  setPage={setPage}
               />
            </>
         )}
      </>
   );
};

export default Page;
