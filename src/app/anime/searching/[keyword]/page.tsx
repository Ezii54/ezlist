import { getResAnimeAPI } from "@/libs/api";
import ListAnime from "@/app/anime/components/ListAnime";

const Page = async ({ params }) => {
   const { keyword } = params;
   const decKeyword = decodeURI(keyword);
   const searchAnime = await getResAnimeAPI("/anime", `q=${decKeyword}`);

   return (
      <>
         <section>
            <ListAnime
               api={searchAnime}
               title={`Hasil Pencarian dari: ${decKeyword}`}
               linkHref={undefined}
               linkTitle={undefined}
            />
         </section>
      </>
   );
};

export default Page;
