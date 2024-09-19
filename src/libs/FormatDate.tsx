export function formatDate(dateString: string | number | Date) {
   const date = new Date(dateString);
   const day = date.getDate();
   const month = date.toLocaleString("en-US", { month: "short" });
   const year = date.getFullYear();

   return `${day} ${month} ${year}`;
}
