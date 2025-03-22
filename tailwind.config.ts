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
        'uw-red': '#C5050C',
        'uw-dark-red': '#9B0000',
        'uw-gray': '#646569',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
