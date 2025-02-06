/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      fade: 'fadeOut 5s ease-in-out',
    },
    keyframes: theme => ({
      fadeOut: {
        '0%': { backgroundColor: theme('colors.red.300') },
        '100%': { backgroundColor: theme('colors.transparent') },
      },
    }),
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
