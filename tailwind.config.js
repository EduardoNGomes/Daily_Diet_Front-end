/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'red-dark': '#BF3B44',
      'red-mid': '#f3babd',
      'red-light': '#f4e6e7',

      'green-dark': '#639339',
      'green-mid': '#CBE4B4',
      'green-light': '#E5F0DB',

      'gray-1': '#1B1D1E',
      'gray-2': '#333638',
      'gray-3': '#5C6265',
      'gray-4': '#B9BBBC',
      'gray-5': '#DDDEDF',
      'gray-6': '#DDDEDF',
      'gray-7': '#FAFAFA'
    },
    extend: {}
  },
  plugins: []
}
