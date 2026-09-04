/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        imd: {
          primary: '#00ff88',
          secondary: '#ff0088',
          dark: '#0a0a0a',
          light: '#ffffff',
        }
      }
    },
  },
  plugins: [],
}
