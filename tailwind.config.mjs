/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: '#2563EB',
        ink: '#111827',
        surface: '#FAFAFA',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#111827',
            a: { color: '#2563EB' },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      },
    },
  },
  plugins: [],
};
