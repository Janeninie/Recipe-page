import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",

        stone: {
          100: " hsl(30, 54%, 90%)",
          150: " hsl(30, 18%, 87%)",
          600: "hsl(30, 10%, 34%)",
          900: "hsl(24, 5%, 18%)",
        },
        brown: {
          800: "hsl(14, 45%, 36%)",
        },
        rose: {
          800: "hsl(332, 51%, 32%)",
          50: "hsl(330, 100%, 98%)",
        },
      },
      fontSize: {
        paragraph: "16px",
      },
      fontFamily: {
        outfit: ["Outfit", "serif"],
        young: ["Young Serif", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
