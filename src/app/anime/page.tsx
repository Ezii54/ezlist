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
         <div className="border-t-2 border-color-accent mt-1"></div>
         <section>
            <ListAnime
               api={popAnime}
               title="Most Popular"
               linkHref="/anime/res/viewmore"
               linkTitle="(View More)"
            />
         </section>
         <div className="border-t-2 border-color-accent mt-1"></div>
         <section>
            <ListAnime
               api={recAnime}
               title="Recommendations"
               linkHref=""
               linkTitle=""
            />
         </section>
         <div className="border-t-2 border-color-accent mt-1"></div>
         <ListLetter />
         <div className="border-t-2 border-color-accent mt-1"></div>
         <section>
            <div className="text-color-primary">
               <ListGenre api={genreAnime} title={"Genres:"} />
               <ListGenre api={themeAnime} title={"Themes:"} />
               <ListGenre api={demographicsAnime} title={"Demographics:"} />
            </div>
         </section>
         <div className="border-t-2 border-color-accent mt-1"></div>
      </div>
   );
};

export default Page;
