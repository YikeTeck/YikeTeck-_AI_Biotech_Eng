/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'yiketeck-red': '#C02C2C',
          'yiketeck-dark': '#3A3A3A',
          'yiketeck-light': '#F5F5F5',
        }
      },
    },
    plugins: [],
  }