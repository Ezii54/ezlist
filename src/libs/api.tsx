export const getResAnimeAPI = async (resource, query) => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}?${query}`
   );
   const anime = await response.json();
   return anime;
};

export const getDetAnimeAPI = async (resource) => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}`
   );
   const anime = await response.json();
   return anime;
};

export const getResListAnimeAPI = async (resource, objectProperty) => {
   try {
      const response = await getDetAnimeAPI(resource);
      if (response && response.data) {
         return response.data.flatMap((item) => item[objectProperty]);
      } else {
         throw new Error("Invalid response from API");
      }
   } catch (error) {
      console.error("Error fetching data from API:", error);
      throw error;
   }
};

export const reproduce = async (data, gap) => {
   const first = ~~(Math.random() * (data.length - gap) + 1);
   const last = first + gap;
   const response = {
      data: data.slice(first, last),
   };
   return response;
};
