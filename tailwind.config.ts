import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          black: "var(--brand-black)",
          primary: "var(--brand)",
          "text-strong": "var(--brand-text-strong)",
          "text-weak": "var(--brand-text-weak)",
          "stroke-strong": "var(--brand-stroke-strong)",
          "stroke-weak": "var(--brand-stroke-weak)",
          "fill": "var(--brand-fill-bg)"
        }
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        lato: ['var(--font-lato)'],
      },
      fontSize: {
        base: ['15px', '1.5'],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/typography")],
};
export default config;
