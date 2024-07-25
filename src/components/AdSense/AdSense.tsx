"use client";

import { useEffect } from "react";

type AdSenseTypes = {
   pId: string;
};

const AdSense = ({ pId }: AdSenseTypes) => {
   useEffect(() => {
      const script = document.createElement("script");
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`;
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);

      return () => {
         document.body.removeChild(script);
      };
   }, [pId]);

   return null;
};

export default AdSense;
