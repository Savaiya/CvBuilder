/** @type {import('tailwindcss').Config} */
export default {
  content:[
    './index.html', './src/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      spacing:{
        width:{
          a4:"210mm",
        },
        height:{
          a4:"297mm"
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

