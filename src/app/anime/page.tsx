import ListAnime from "@/app/anime/components/ListAnime";
import { getResAnimeAPI } from "@/libs/api";
import Search from "./components/Search";
import Link from "next/link";

const Page = async () => {
   const limitAnime = 6;
   const popAnime = await getResAnimeAPI("/top/anime", `limit=${limitAnime}`);

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
         <section>
            <ListAnime
               api={popAnime}
               title="Most Popular"
               linkHref="/anime/viewmore/mostpopular"
               linkTitle="(View More)"
            />
         </section>
      </div>
   );
};

export default Page;
