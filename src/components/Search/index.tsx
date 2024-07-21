"use client";

import { useRef } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Search = () => {
   const searchRef = useRef<HTMLInputElement>(null);
   const router = useRouter();

   const handleSearch = (event) => {
      const keyword = searchRef.current!.value;
      if (!keyword || keyword.trim() == "") return;
      if (event.key === "Enter" || event.type === "click") {
         event.preventDefault();
         router.push(`/anime/searching/${keyword}`);
      }
   };

   return (
      <div className="relative text-color-dark p-2">
         <input
            placeholder="Search Anime..."
            id="searching"
            ref={searchRef}
            onKeyDown={handleSearch}
            className="w-full rounded p-2"
         />
         <button
            className="text-color-accent absolute right-0 top-0 p-3"
            onClick={handleSearch}
         >
            <MagnifyingGlass size={32} />
         </button>
      </div>
   );
};

export default Search;
