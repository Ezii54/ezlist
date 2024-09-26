import { InstagramLogo } from "@phosphor-icons/react";
import Link from "next/link";

const LinkInstagram = ({
   linkHref,
   titleHref,
   descHref,
}: {
   linkHref: any;
   titleHref: any;
   descHref: any;
}) => {
   return (
      <>
         <Link href={linkHref} className="flex items-center gap-1">
            <InstagramLogo
               size={32}
               weight="light"
               className="text-color-purple"
            />
            <div className="flex flex-row gap-1 text-sm">
               <p className="text-color-accent">{titleHref}</p>
               <p>{descHref}</p>
            </div>
         </Link>
      </>
   );
};

export default LinkInstagram;
