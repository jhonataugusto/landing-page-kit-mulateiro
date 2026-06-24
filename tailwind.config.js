/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d3d38',
          dark: '#062925',
          light: '#1a5c54',
        },
        accent: {
          DEFAULT: '#3d6b5e',
          light: '#5a8f7f',
        },
        secondary: '#b8c9b0',
        highlight: '#8fb89e',
        cream: '#faf8f5',
        sand: '#f3efe8',
        light: '#e8f0ed',
        lighter: '#f5f8f7',
        textLight: '#5c6663',
        text: '#1c2422',
        gold: '#c9a227',
        urgency: '#b83232',
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
      },
      borderRadius: {
        sm: '0.5rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(13, 61, 56, 0.06), 0 1px 2px rgba(13, 61, 56, 0.04)',
        md: '0 4px 16px rgba(13, 61, 56, 0.08)',
        lg: '0 12px 40px rgba(13, 61, 56, 0.12)',
        xl: '0 20px 60px rgba(13, 61, 56, 0.16)',
        glow: '0 8px 32px rgba(13, 61, 56, 0.24)',
        card: '0 2px 12px rgba(13, 61, 56, 0.06), 0 0 0 1px rgba(13, 61, 56, 0.04)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '400ms',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
