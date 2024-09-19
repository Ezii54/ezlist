"use client";

import { useRef } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Search = () => {
   const searchRef = useRef<HTMLInputElement>(null);
   const router = useRouter();

   const handleSearch = (event: any) => {
      const keyword = searchRef.current!.value;
      if (!keyword || keyword.trim() == "") return;
      if (event.key === "Enter" || event.type === "click") {
         event.preventDefault();
         router.push(`/anime/search/${keyword}`);
      }
   };

   return (
      <div className="relative text-color-white">
         <input
            placeholder="Search Anime..."
            id="searching"
            ref={searchRef}
            onKeyDown={handleSearch}
            className="w-full p-2 border rounded bg-color-md border-color-xl hover:bg-color-sm"
         />
         <button
            className="absolute top-0 right-0 p-1 text-color-accent"
            onClick={handleSearch}
         >
            <MagnifyingGlass size={32} weight="bold" />
         </button>
      </div>
   );
};

export default Search;
