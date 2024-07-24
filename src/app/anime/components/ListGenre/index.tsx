import Link from "next/link";

const ListGenre = ({ api, title }) => {
   return (
      <div>
         <p className="text-lg font-bold text-center">{title}</p>
         <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2">
            {api.data?.map((anime, index) => (
               <Link
                  href={`/anime/res/genre/${anime.mal_id}`}
                  passHref
                  key={index}
                  className="text-color-accent hover:scale-105 text-center border border-color-primary bg-color-soft rounded"
               >
                  {anime.name} ({anime.count})
               </Link>
            ))}
         </div>
      </div>
   );
};

export default ListGenre;
