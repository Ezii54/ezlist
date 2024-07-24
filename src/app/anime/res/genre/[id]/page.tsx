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
   const [genAnime, setGenAnime] = useState({
      data: [],
      pagination: { last_visible_page: 1 },
   });

   const fetchData = async () => {
      setIsLoading(true);
      try {
         const genAnimeResponse = await getResAnimeAPI(
            "/anime",
            `genres=${id} & page=${page} & limit=24`
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
