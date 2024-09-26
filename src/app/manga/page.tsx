import Link from "next/link";

const page = () => {
   return (
      <div className="text-center">
         <p>Maaf, Halaman belum tesedia.</p>
         <Link href={`/`} className="text-lg text-color-accent">
            Kembali
         </Link>
      </div>
   );
};

export default page;
