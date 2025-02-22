/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js,ts}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007dd1',
        secondary: {
          DEFAULT: '#F5F5F5',
          white: '#FFFFFF'
        },
        accent: {
          black: '#1C1C1C',
          gray: '#D9D9D9'
        },
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        gala: ['Gala', 'sans-serif']
      }
    },
  },
  plugins: [],
}
