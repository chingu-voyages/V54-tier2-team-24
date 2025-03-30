/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'karla': ['Karla', 'sans-serif'],
          'inconsolata': ['Inconsolata', 'monospace'],
        },
        fontWeight: {
          'extralight': 200,
          'semibold': 600,
        },
        colors: {
          'background-start': '#02010B',
          'background-end': '#0D00A4',
          'button-icon': '#A3CAF6',
          'body-dark': '#FFFFFF',
          'body-light': '#000000',
        },
        borderRadius: {
          'button': '5px',
          'progress': '8px',
        },
      },
    },
    // You can add plugins if needed
    plugins: [],
  }