
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",


  ],

  theme: {
    extend: {
      backgroundImage: {
        texture: "url('/assets/texture.png')",
        gradients: "url('/assets/gradient.jpg')",
      }

    },
  },
  plugins: [],
}

