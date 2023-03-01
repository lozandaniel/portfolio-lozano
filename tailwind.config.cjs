/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl':
          '0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%)',
      },
      keyframes: {
        text: {
          '0%, 100%': { color: '#000' },
          '25%': { color: '#000080' },
          '50%': { color: '#4169E1' },
          '75%': { color: '#4B0082' },
        },
      },
      animation: {
        text: 'text 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
