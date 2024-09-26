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
               titleHref={`(Randomination TOTAL)`}
               descHref={`(Private Edition)`}
            />
            <LinkWhatsapp
               linkHref="https://chat.whatsapp.com/FdEcczEq2wzFWrfyk7Ygzx"
               titleHref={`(Randomination TOTAL)`}
               descHref={`(Public Edition)`}
            />
         </section>
         <section className="flex flex-col gap-1 p-1 border rounded bg-color-md border-color-xl">
            <p className="px-5 border-b border-b-color-xl">
               Un-Official Community
            </p>
            <LinkWhatsapp
               linkHref="https://chat.whatsapp.com/J5jnZwR4jjjIDShGwyaNx3"
               titleHref={`(『Oƚαƙυ αɾҽα • ヅ)`}
               descHref={``}
            />
         </section>
         <section className="flex flex-col gap-1 p-1 border rounded bg-color-md border-color-xl">
            <p className="px-5 border-b border-b-color-xl">
               A Special Thanks To
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
