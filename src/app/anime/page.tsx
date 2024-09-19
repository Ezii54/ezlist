import { getResAnimeAPI } from "@/libs/api";
import ListGenre from "@/app/anime/components/ListGenre";
import ListLetter from "./components/ListLetter";
import Search from "./components/Search";

const Page = async () => {
   const genreAnime = await getResAnimeAPI("/genres/anime");

   return (
      <div className="flex flex-col gap-5">
         <section className="">
            <p className="text-center">
               ezList adalah sebuah Website yang berisi kumpulan Anime & Manga
               dalam bentuk daftar yang lengkap, memudahkan pengguna untuk
               melakukan pencaharian. Namun perlu diingat, kami tidak
               menyediakan tempat untuk menonton Anime / membaca Manga.
            </p>
         </section>
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
