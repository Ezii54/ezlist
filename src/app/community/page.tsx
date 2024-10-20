"use client";

import LinkInstagram from "./components/LinkInstagram";
import LinkWhatsapp from "./components/LinkWhatsapp";

const page = () => {
   return (
      <div className="flex flex-col gap-5">
         <section className="text-center">
            Jadilah bagian dari Komunitas kami, dapatkan informasi terbaru,
            berinstraksi dengan sesama anggota, bergabunglah untuk pengalaman
            yang lebih lengkap.
         </section>
         <section className="flex flex-col gap-1 p-1 border rounded bg-color-md border-color-xl">
            <p className="px-5 border-b border-b-color-xl">
               Official Community
            </p>
            <LinkWhatsapp
               linkHref="#"
               titleHref={`(Randomination)`}
               descHref={`(Private Edition)`}
            />
            <LinkWhatsapp
               linkHref="https://chat.whatsapp.com/FinnozuIjtc1RBfCt8kYu9"
               titleHref={`(Otaku area) :re`}
               descHref={`(Public Edition)`}
            />
         </section>
         <section className="flex flex-col gap-1 p-1 border rounded bg-color-md border-color-xl">
            <p className="px-5 border-b border-b-color-xl">
               A Special Thanks To:
            </p>
            <LinkInstagram
               linkHref={`https://www.instagram.com/zibransrr/`}
               titleHref={`@zibransrr`}
               descHref={`(Promotor)`}
            />
         </section>
      </div>
   );
};

export default page;
