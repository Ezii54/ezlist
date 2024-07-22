import ListMenu from "@/components/ListMenu";
import wpAnime from "@/libs/media/wpAnime.jpg";
import wpManga from "@/libs/media/wpManga.jpg";

export default function Home() {
   return (
      <>
         <div>
            <div className="text-center">
               <p className="text-2xl font-bold">ezList - Anime & Manga</p>
               <br />
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  excepturi veniam distinctio sunt eaque facilis, animi sed
                  alias maiores nesciunt eius sint consectetur voluptatibus
                  temporibus hic corporis optio. Nobis, libero?
               </p>
            </div>
            <div>
               <hr className="text-color-dark text-opacity-80 mt-2 mb-1" />
            </div>
            <div>
               <ListMenu
                  linkHref={"/anime"}
                  linkImage={wpAnime}
                  linkTitle={"Search Anime"}
               />
               <ListMenu
                  linkHref={"#"}
                  linkImage={wpManga}
                  linkTitle={"Search Manga"}
               />
            </div>
         </div>
      </>
   );
}
