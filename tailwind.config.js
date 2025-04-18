/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#F5F6F8",
        brown: "#8E6447",
        "text-gray": "#4F5665",
        navy: "#0B132A",
        orange: "#FF8906",

        error: "#D92D20",
        success: "#079455",
        warning: "#DC6803",
        info: "#0DCAF0",
      },
      backgroundImage: {
        "hero-image-home": 'url("/hero-image-home.png")',
        "gray-to-dark": "linear-gradient(to bottom, #777C82, #0B0909)",
      },
      fontFamily: {
        sacramento: ["Sacramento", "cursive"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      screens: {
        sm: "500px",
      },
    },
  },
  plugins: [],
};
