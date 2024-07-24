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

   return (
      <div className="p-1">
         <section>
            <Search />
         </section>
         <hr className="text-color-dark text-opacity-80 mt-1" />
         <section>
            <ListAnime
               api={popAnime}
               title="Most Popular"
               linkHref="/anime/res/viewmore"
               linkTitle="(View More)"
            />
         </section>
         <hr className="text-color-dark text-opacity-80 mt-1" />
         <section>
            <ListAnime
               api={recAnime}
               title="Recommendations"
               linkHref=""
               linkTitle=""
            />
         </section>
         <hr className="text-color-dark text-opacity-80 mt-1" />
         <section>
            <ListLetter />
         </section>
         <hr className="text-color-dark text-opacity-80 mt-1" />
         <section>
            <ListGenre
               api={await getResAnimeAPI("/genres/anime", "filter=genres")}
               title={"Genres:"}
            />
            <ListGenre
               api={await getResAnimeAPI("/genres/anime", "filter=themes")}
               title={"Themes:"}
            />
            <ListGenre
               api={await getResAnimeAPI(
                  "/genres/anime",
                  "filter=demographics"
               )}
               title={"Demographics:"}
            />
         </section>
      </div>
   );
};

export default Page;
