import Link from "next/link";

const ListLetter = () => {
   const letters = "abcdefghijklmnopqrstuvwxyz".split("");

   return (
      <div className="py-1">
         <div className="text-center mb-1 text-xl font-bold">
            Search by Letter
         </div>
         <div className="alphabet-links flex flex-row flex-wrap gap-3 justify-center">
            {letters.map((id) => (
               <Link href={`/anime/res/letter/${id}`} key={id}>
                  <div className="letter-link hover:text-color-accent">
                     {id.toUpperCase()}
                  </div>
               </Link>
            ))}
         </div>
      </div>
   );
};

export default ListLetter;
