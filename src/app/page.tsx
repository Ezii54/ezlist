import Link from "next/link";

export default function Home() {
   return (
      <div className="p-2">
         <div className="justify-center items-center text-center">
            <div>
               Selamat Datang di Website ezList (Anime/Manga), Website ini masih
               dalam tahap pengembangan dan Developernya malah asik grinding di
               Skyrim.. biadab memang, walau sudah ditegur oleh temannya
               berkali-kali, sang Developer tetap bermain Skyrim.
            </div>
            <br />
            <div>
               <Link
                  href={"/anime"}
                  className="text-xl font-bold hover:text-color-accent"
               >
                  Search Anime
               </Link>
            </div>
            <div>
               <Link
                  href={"/manga"}
                  className="text-xl font-bold hover:text-color-accent"
               >
                  Search Manga
               </Link>
            </div>
            <br />
            <Link
               href="https://chat.whatsapp.com/FdEcczEq2wzFWrfyk7Ygzx"
               passHref
            >
               <div
                  rel="noopener noreferrer"
                  className="hover:text-color-accent"
               >
                  Join Us (WhatsApp Group)
               </div>
            </Link>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
         </div>
      </div>
   );
}
