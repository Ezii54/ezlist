import Link from "next/link";
import Image from "next/image";
import Logo from "@/libs/media/Logo.png";

const Navbar = () => {
   return (
      <div className="flex items-center justify-center h-10 px-1 mb-5 border rounded-md border-color-black bg-color-md">
         <div className="">
            <Link href={"/"}>
               <Image
                  src={Logo}
                  alt="#"
                  width={32}
                  height={32}
                  className="rounded"
               />
            </Link>
         </div>
      </div>
   );
};

export default Navbar;
