"use client";

import { ArrowFatLineLeft, ArrowFatLineRight } from "@phosphor-icons/react";

const Pagination = ({
   page,
   lastPage,
   setPage,
}: {
   page: any;
   lastPage: any;
   setPage: any;
}) => {
   const scrollTop = () => {
      scrollTo({ top: 0, behavior: "smooth" });
   };
   const handleNextPage = () => {
      setPage((prevState: number) => prevState + 1);
      scrollTop();
   };
   const handlePrevPage = () => {
      setPage((prevState: number) => prevState - 1);
      scrollTop();
   };

   return (
      <div className="flex items-center justify-center gap-2 px-2 py-2 font-bold">
         {page <= 1 ? (
            <ArrowFatLineLeft size={32} />
         ) : (
            <button
               onClick={handlePrevPage}
               className="text-color-accent hover:scale-105"
            >
               <ArrowFatLineLeft size={32} />
            </button>
         )}
         <div>
            [ {page} / {lastPage} ]
         </div>
         {page >= lastPage ? (
            <ArrowFatLineRight size={32} />
         ) : (
            <button
               onClick={handleNextPage}
               className="text-color-accent hover:scale-105"
            >
               <ArrowFatLineRight size={32} />
            </button>
         )}
      </div>
   );
};

export default Pagination;
