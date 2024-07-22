"use client";

import { WhatsappLogo, FacebookLogo } from "@phosphor-icons/react";
import Link from "next/link";

const Footer = () => {
   return (
      <>
         <div className="flex flex-col text-center">
            <div>
               <hr className="text-color-dark text-opacity-80 mt-1" />
            </div>
            <br />
            <div>
               <p className="text-xl font-bold mb-2">Join Us</p>
               <div className="flex flex-row justify-center gap-2">
                  <Link
                     href={"https://chat.whatsapp.com/FdEcczEq2wzFWrfyk7Ygzx"}
                     passHref
                  >
                     <button className="text-color-accent hover:scale-105">
                        <WhatsappLogo size={32} />
                     </button>
                  </Link>
               </div>
            </div>
            <br />
            <div>
               <p>©2024 | ezList</p>
               <p>ezProject-ID</p>
            </div>
            <br />
         </div>
      </>
   );
};

export default Footer;
