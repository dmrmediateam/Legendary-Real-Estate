/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Accent Color
        gold: {
          DEFAULT: '#890100',  // Main accent color
          light: '#a00100',
          dark: '#6b0000',
        },
        // Off-Black & Off-White for luxury feel
        'off-black': '#1a1a1a',
        'off-white': '#faf9f7',
        black: '#1a1a1a',
        white: '#faf9f7',
        // Gray Scale
        gray: {
          light: '#f5f4f2',
          DEFAULT: '#e8e6e3',
          medium: '#e8e6e3',
          dark: '#5a5a5a',
        },
      },
      fontFamily: {
        // Montserrat for body text
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        // PT Serif for headings
        serif: ['PT Serif', 'serif'],
        heading: ['PT Serif', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-left-slow': 'fadeInLeftSlow 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInLeftSlow: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
