import { getResAnimeAPI } from "@/libs/api";
import ListGenre from "@/app/anime/components/ListGenre";
import ListLetter from "./components/ListLetter";
import Search from "./components/Search";

const Page = async () => {
   const genreAnime = await getResAnimeAPI("/genres/anime");

   return (
      <div className="flex flex-col gap-5">
         <section>
            <Search />
         </section>
         <section>
            <ListLetter />
         </section>
         <section>
            <ListGenre api={genreAnime} />
         </section>
      </div>
   );
};

export default Page;
