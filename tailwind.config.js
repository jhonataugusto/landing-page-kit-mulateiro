/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00312e',
        secondary: '#b3c1a6',
        accent: '#44645c',
        light: '#ddeaeb',
        lighter: '#dde1f1',
        highlight: '#97bfa9',
        textLight: '#666666',
        text: '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
      },
      borderRadius: {
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0, 49, 46, 0.08)',
        'md': '0 4px 16px rgba(0, 49, 46, 0.12)',
        'lg': '0 8px 32px rgba(0, 49, 46, 0.16)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
      },
    },
  },
  plugins: [],
}
