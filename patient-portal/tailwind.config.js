/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",  // Linking to your custom colors from root
        foreground: "var(--foreground)",  // Linking to your custom colors from root
        primary: "#A26B61",               // Custom primary color from your palette
        secondary: "#3A696E",             // Custom secondary color from your palette
        accent: "#6C5846",                // Custom accent color from your palette
      },
      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'], // Adding the Great Vibes font
      },
      ringColor: {
        DEFAULT: "#3A696E",               // Ensuring the default ring color uses secondary
      },
    },
  },
  plugins: [],
};
