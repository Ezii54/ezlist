import animeLogo from "@/libs/media/anime.png";
import mangaLogo from "@/libs/media/manga.png";
import ListMenu from "./components/ListMenu";
import Link from "next/link";

export default function Home() {
   return (
      <div className="flex flex-col items-center justify-center gap-3">
         <section className="text-center">
            <div className="mb-2 text-6xl animate-pulse text-color-accent">
               ezList
               {<p className="text-sm">Index of Anime & Manga</p>}
            </div>
            <p className="text-sm">
               Website ini tidak menyediakan layanan Streaming atau Download,
               Kami hanya menyediakan informasi lengkap tentang semua Anime &
               Manga, sehingga mempermudah pengguna untuk melakukan Searching.
            </p>
         </section>
         <ListMenu
            pictHref={animeLogo}
            linkHref={`/anime`}
            titleHref={`Search Anime`}
         />
         <ListMenu
            pictHref={mangaLogo}
            linkHref={`/manga`}
            titleHref={`Search Manga`}
         />
         <section className="text-center">
            Jadilah bagian dari komunitas kami, tap{" "}
            {
               <Link
                  href={`/community`}
                  passHref
                  className="underline text-color-blue"
               >
                  disini
               </Link>
            }{" "}
            untuk bergabung dan mulai berinstraksi dengan sesama anggota.
         </section>
      </div>
   );
}
