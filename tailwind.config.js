/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 20px 45px rgba(15, 23, 42, 0.15)',
      },
      colors: {
        navy: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
        },
      },
    },
  },
  plugins: [],
}
