import ListAnime from "@/app/anime/components/ListAnime";
import { getResAnimeAPI, getResListAnimeAPI, reproduce } from "@/libs/api";
import Search from "./components/Search";
import Link from "next/link";

const Page = async () => {
   const limitAnime = 6;
   const popAnime = await getResAnimeAPI("/top/anime", `limit=${limitAnime}`);
   let recAnime = await getResListAnimeAPI("/recommendations/anime", "entry");
   recAnime = await reproduce(recAnime, limitAnime);

   return (
      <div className="">
         <section>
            <Search />
            <div className="text-center">
               Tap{" "}
               {
                  <Link
                     href="/anime/search"
                     passHref
                     className="text-color-accent hover:scale-105"
                  >
                     Here
                  </Link>
               }{" "}
               to Search by Letter, Genre, etc.
            </div>
         </section>
         <hr className="text-color-dark text-opacity-80 mt-1" />
         <section></section>
         <section>
            <ListAnime
               api={popAnime}
               title="Most Popular"
               linkHref="/anime/viewmore/mostpopular"
               linkTitle="(View More)"
            />
         </section>
         <hr className="text-color-dark text-opacity-80" />
         <section>
            <ListAnime
               api={recAnime}
               title="Recommendations"
               linkHref=""
               linkTitle=""
            />
         </section>
      </div>
   );
};

export default Page;
