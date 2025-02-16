/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        work: ['var(--font-work)'],
        oswald: ['var(--font-oswald)'],
        spectral: ['var(--font-spectral)']
      },
      maxWidth: {
        '8xl': '1840px'
      },
      screens: {
        sm: '768px',
        md: '992px',
        lg: '1440px',
        xl: '1920px',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        'infinite-scroll': 'infinite-scroll 100s linear infinite',
        spin: 'reverse-spin 18s linear infinite'
      },
      keyframes: theme => ({
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        'infinite-scroll': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          }
        }
      })
    },
  },
  plugins: [],
};
