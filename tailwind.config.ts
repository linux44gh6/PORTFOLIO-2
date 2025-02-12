import type { Config } from "tailwindcss";
import daisyui from "daisyui";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          color1:'#8750f7',
          color2:'#0f0715',
          color3:"#140c1c",
          color4:"#2a1454"
      },
    },
  },
  plugins: [(daisyui)],
} satisfies Config;
