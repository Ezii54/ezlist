import type { Config } from "tailwindcss";

const config: Config = {
   content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
   theme: {
      extend: {
         colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
            color: {
               black: "#000000",
               white: "#ffffff",
               xl: "#040507",
               lg: "#0D1117",
               md: "#161b22",
               sm: "#21262d",
               accent: "#77bdfb",
               green: "#28A745",
               blue: "#0366D6",
               red: "#D73A49",
               purple: "#5851DB",
            },
         },
      },
   },
   plugins: [],
};
export default config;
