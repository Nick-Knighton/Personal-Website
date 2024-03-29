module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': "#343F4F",
      'secondary': "rgb(40,100,150)",
      'tertiary': "#286496",

      'primary-gray': "rgb(87,92,100)",
      'secondary-gray': "rgb(175,175,180)",

      'text-white': "rgb(255,255,255)",
      'text-black': "#0c0a09",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};