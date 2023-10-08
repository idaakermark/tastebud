/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      green: '#4A5859',
      lightgreen: '#a3b18a',
      hgreen: '#ccd5ae',
      white: '#ffffff',
      darkgreen: '#3a5a40',
      pink: '#ffcad4',
      lightpink: '#fff0f3',
    }, 
    fontFamily: {
      shadows: ["Shadows Into Light", 'serif'],
      gloria: ['Gloria Hallelujah','serif'],
      poppins: ['Poppins', 'serif'],

    },

    extend: {},
  },
  plugins: [],
}

