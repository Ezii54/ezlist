export const getResAnimeAPI = async (resource: any) => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}`
   );
   const anime = await response.json();
   return anime;
};

export const getResponAnimeAPI = async (resource: any, query: any) => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}?${query}`
   );
   const anime = await response.json();
   return anime;
};
