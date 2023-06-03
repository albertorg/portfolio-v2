/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      'base': {
        100: 'rgb(15, 23, 42)',
        200: 'rgb(19, 28, 49)'
      },
      'primary': '#0693e3',
      'primary-2': 'rgba(6,147,227,0.1)',
      'gray': 'rgb(148 163 184)',
      'white': 'rgb(226 232 240)'
    },
    container: {
      center: true
    }
  },
  plugins: [],
}

// background-color: rgb(18 14 38);
// background - color: rgb(26, 19, 54);


// base 2: background-color: rgb(19 28 49);

// 3: rgb(22 33 58)