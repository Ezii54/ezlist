import ListAnime from "@/app/anime/components/ListAnime";
import { getResAnimeAPI, getResListAnimeAPI, reproduce } from "@/libs/api";
import Search from "./components/Search";
import ListGenre from "./components/ListGenre";
import ListLetter from "./components/ListLetter";

const Page = async () => {
   const limitAnime = 6;
   const popAnime = await getResAnimeAPI("/top/anime", `limit=${limitAnime}`);
   let recAnime = await getResListAnimeAPI("/recommendations/anime", "entry");
   recAnime = await reproduce(recAnime, limitAnime);

   const genreAnime = await getResAnimeAPI("/genres/anime", "filter=genres");
   const themeAnime = await getResAnimeAPI("/genres/anime", "filter=themes");
   const demographicsAnime = await getResAnimeAPI(
      "/genres/anime",
      "filter=demographics"
   );

   return (
      <div className="p-1">
         <section>
            <Search />
         </section>

         <section>
            <ListLetter />
         </section>
         <hr className="text-color-dark text-opacity-80 mt-1" />
         <section>
            <ListGenre api={genreAnime} title={"Genres"} />
            <ListGenre api={themeAnime} title={"Themes"} />
            <ListGenre api={demographicsAnime} title={"Demographics"} />
         </section>
      </div>
   );
};

export default Page;
