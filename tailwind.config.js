/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#365475',
        secondary: '#c2383d',
        light: '#333f4f',
        lightest: '#f2e8c7',
      }
    },
  },
  plugins: [],
}