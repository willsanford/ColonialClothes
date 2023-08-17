/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pink-cloth-bg': "url('/bg/pink-cloth.jpg')",
        'pink-cloth2-bg': "url('/bg/pink-cloth2.jpg')",
        'pink-cloth3-bg': "url('/bg/pink-cloth3.jpg')",
        'cloth-regular-bg': "url('/bg/cloth-regular.jpg')",
        'ladies-bg': "url('/bg/ladies.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
