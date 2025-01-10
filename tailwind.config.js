// tailwind.config.js
// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
//   theme: {
//     extend: {
//       fontFamily: {
//         blacker: ['"Blacker Sans Display Trial Light"', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
                blacker: ['Blacker Sans Display Trial Light', 'sans-serif'],
              },
    },
  },
  plugins: [],
}