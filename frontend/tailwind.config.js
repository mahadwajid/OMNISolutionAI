/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0FF',
          100: '#CCE1FF',
          200: '#99C3FF',
          300: '#66A5FF',
          400: '#3387FF',
          500: '#0B3D91', // Omni Blue
          600: '#0A367F',
          700: '#082A5F',
          800: '#051D3F',
          900: '#02101F',
        },
        secondary: {
          50: '#F0F0FF',
          100: '#E1E1FF',
          200: '#C3C3FF',
          300: '#A5A5FF',
          400: '#8787FF',
          500: '#6C63FF', // Tech Purple
          600: '#5A52D9',
          700: '#443DB3',
          800: '#2E288C',
          900: '#181366',
        },
        accent: {
          50: '#E6FFFF',
          100: '#CCFFFF',
          200: '#99FFFF',
          300: '#66FFFF',
          400: '#33FFFF',
          500: '#00FFFF', // Electric Cyan
          600: '#00E6E6',
          700: '#00B3B3',
          800: '#008080',
          900: '#004D4D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
