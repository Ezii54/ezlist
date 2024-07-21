import Link from "next/link";
import Image from "next/image";
import Logo from "@/libs/media/Logo.png";

const Navbar = () => {
   return (
      <div className="bg-color-accent sticky-navbar p-1 flex flex-row justify-between items-center">
         <Link href={"/"}>
            <Image
               src={Logo}
               alt=""
               width={40}
               height={40}
               className="rounded"
            />
         </Link>
      </div>
   );
};

export default Navbar;
