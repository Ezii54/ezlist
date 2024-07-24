import Link from "next/link";

const ListLetter = () => {
   const letters = "abcdefghijklmnopqrstuvwxyz".split("");

   return (
      <div>
         <div className="grid grid-cols-9 gap-2">
            <p className="text-center border border-color-primary bg-color-soft rounded">
               #
            </p>
            {letters.map((id) => (
               <Link href={`/anime/res/letter/${id}`} key={id}>
                  <div className="text-color-accent hover:scale-105 text-center border border-color-primary bg-color-soft rounded">
                     {id.toUpperCase()}
                  </div>
               </Link>
            ))}
         </div>
      </div>
   );
};

export default ListLetter;
