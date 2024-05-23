/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#A79277',
        secondary: '#D1BB9E',
        light: '#EAD8C0',
        lightest: '#FFF2E1',
      }
    },
  },
  plugins: [],
}