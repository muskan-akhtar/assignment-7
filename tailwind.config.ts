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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        sixtyfour: ['Sixtyfour', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        merriweather: ['Merriweather', 'serif'],
        lora: ['Lora', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        robotoSlab: ['Roboto Slab', 'serif'],
        rubikVinyl: ['"Rubik Vinyl"', 'sans-serif'],
        bubble: ['"Bubblegum Sans"', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config;
