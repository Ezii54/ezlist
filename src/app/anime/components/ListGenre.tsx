import Link from "next/link";

const ListGenre = ({ api }: { api: any }) => {
   return (
      <div className="grid grid-cols-2 gap-1 lg:grid-cols-4">
         {api.data?.map((anime: any, index: any) => (
            <Link
               href={`/anime/genre/${anime.mal_id}`}
               passHref
               key={index}
               className="text-sm text-center border rounded border-color-xl bg-color-md hover:bg-color-sm text-color-accent"
            >
               {anime.name} ({anime.count})
            </Link>
         ))}
      </div>
   );
};

export default ListGenre;
