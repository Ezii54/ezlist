import { getResAnimeAPI } from "@/libs/api";
import Search from "@/app/anime/components/Search";
import ListGenre from "@/app/anime/components/ListGenre";
import ListLetter from "@/app/anime/components/ListLetter";

const Page = async () => {
   const genreAnime = await getResAnimeAPI(
      "/genres/anime",
      "filter=genres & filter=themes"
   );

   return (
      <div className="p-1">
         <section>
            <Search />
         </section>
         <hr className="text-color-dark text-opacity-80 mt-1 mb-1" />
         <section>
            <ListLetter />
         </section>
         <hr className="text-color-dark text-opacity-80 mt-1" />
         <section>
            <ListGenre api={genreAnime} title={"Search by Genre"} />
         </section>
      </div>
   );
};

export default Page;
