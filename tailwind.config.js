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
      'primary': "#286496",
      'secondary': "#286496",
      'tertiary': "#286496",

      'primary-gray': "rgb(87,92,100)",
      'secondary-gray': "rgb(156,163,175)",

      'text-white': "rgb(255,255,255)",
      'text-black': "rgb(0,0,0)",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};