"use client";

import { ArrowFatLineLeft, ArrowFatLineRight } from "@phosphor-icons/react";

const Pagination = ({ page, lastPage, setPage }) => {
   const scrollTop = () => {
      scrollTo({ top: 0, behavior: "smooth" });
   };
   const handleNextPage = () => {
      setPage((prevState) => prevState + 1);
      scrollTop();
   };
   const handlePrevPage = () => {
      setPage((prevState) => prevState - 1);
      scrollTop();
   };

   return (
      <div className="flex justify-center items-center py-2 px-2 gap-2 text-color-primary text-xl">
         {page <= 1 ? (
            <ArrowFatLineLeft size={32} />
         ) : (
            <button
               onClick={handlePrevPage}
               className="underline hover:text-color-accent transition-all"
            >
               <ArrowFatLineLeft size={32} />
            </button>
         )}
         <div>
            [{page}/{lastPage}]
         </div>
         {page >= lastPage ? (
            <ArrowFatLineRight size={32} />
         ) : (
            <button
               onClick={handleNextPage}
               className="underline hover:text-color-accent transition-all"
            >
               <ArrowFatLineRight size={32} />
            </button>
         )}
      </div>
   );
};

export default Pagination;
