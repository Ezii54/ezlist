import Link from "next/link";

const ListLetter = () => {
   const letters = "abcdefghijklmnopqrstuvwxyz".split("");

   return (
      <div className="grid grid-cols-9 gap-2">
         <div className="text-center border rounded border-color-xl bg-color-md">
            #
         </div>
         {letters.map((id) => (
            <Link href={`/anime/letter/${id}`} key={id}>
               <div className="text-center text-sm border rounded border-color-xl bg-color-md hover:bg-color-sm text-color-accent">
                  {id.toUpperCase()}
               </div>
            </Link>
         ))}
      </div>
   );
};

export default ListLetter;
