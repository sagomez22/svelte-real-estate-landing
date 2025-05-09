/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{svelte,js,ts}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui')
  ]
};

module.exports = config;
