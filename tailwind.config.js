/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Inter, monospace',
    },
    extend: {
      screens: {
        xs: '0px',
        sm: '585px', // Redefine small breakpoint
      },
    },
  },
  plugins: [],
};
