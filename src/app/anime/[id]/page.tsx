import { getResAnimeAPI } from "@/libs/api";
import { formatDate } from "@/libs/FormatDate";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params: { id } }: { params: { id: any } }) => {
   const anime = await getResAnimeAPI(`/anime/${id}/full`);

   return (
      <>
         <div className="mb-1">
            <p className="text-lg text-center">{anime.data.title_english}</p>
         </div>
         <div className="flex gap-2">
            <Image
               src={anime.data.images.webp.image_url}
               alt={anime.data.images.jpg.image_url}
               width={160}
               height={192}
               className="max-w-40 max-h-48 object-cover rounded"
            />
            <div className="flex flex-col gap-1">
               <div className="border border-color-dark bg-color-soft rounded p-1">
                  <p className="text-sm text-center">Statistics</p>
                  <hr className="text-color-dark text-opacity-80" />
                  <div className="text-xs">
                     <p className="">Rank: #{anime.data.rank}</p>
                     <p className="">
                        Score: {anime.data.score} (by {anime.data.scored_by}{" "}
                        users)
                     </p>
                     <p className="">Popularity: #{anime.data.popularity}</p>
                     <p className="">Members: {anime.data.members}</p>
                     <p className="">Favorites: {anime.data.favorites}</p>
                  </div>
               </div>
               <div className="border border-color-dark bg-color-soft rounded p-1">
                  <p className="text-sm text-center">Information</p>
                  <hr className="text-color-dark text-opacity-80" />
                  <div className="text-xs">
                     <p>Type: {anime.data.type}</p>
                     <p>
                        Genres:{" "}
                        {anime.data.genres
                           .map((genre: any) => genre.name)
                           .join(", ")}
                     </p>
                     <p>Source: {anime.data.source}</p>
                     <p>Episodes: {anime.data.episodes}</p>
                     <p>Aired: {formatDate(anime.data.aired.from)}</p>
                     <p>Status: {anime.data.status}</p>
                     <p>Rating: {anime.data.rating}</p>
                     <p>Duration: {anime.data.duration}</p>
                     <p>
                        Studios:{" "}
                        {anime.data.studios
                           .map((studio: any) => studio.name)
                           .join(", ")}
                     </p>
                     <p>
                        Streaming:{" "}
                        {anime.data.streaming.map(
                           (streaming: any, index: any) => (
                              <span key={index}>
                                 <Link
                                    href={streaming.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-color-accent hover:scale-105"
                                 >
                                    {streaming.name}
                                 </Link>
                                 {index < anime.data.streaming.length - 1
                                    ? ", "
                                    : ""}
                              </span>
                           )
                        )}
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="mb-1">
            <p className="text-md text-center">Synopsis</p>
            <p className="text-sm">{anime.data.synopsis}</p>
         </div>
      </>
   );
};

export default Page;
