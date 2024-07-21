import Link from "next/link";

const ListGenre = ({ api, title }) => {
   return (
      <div className="py-1">
         <div>
            <p className="text-lg ml-2 mt-1">{title}</p>
            <div className="grid grid-cols-1 text-md items-center">
               {api.data?.map((anime, index) => (
                  <Link
                     href={`/anime/res/genre/${anime.mal_id}`}
                     key={index}
                     className="hover:text-color-accent"
                  >
                     {anime.name} ({anime.count})
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ListGenre;
