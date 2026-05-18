/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sinister Studios brand palette
        'matte-black': '#050505',
        'graphite': '#121212',
        'blood-red': '#8B0000',
        'crimson-glow': '#C1121F',
        'soft-white': '#F5F5F5',
        'smoke': '#1a1a1a',
        'ash': '#2a2a2a',
      },
      fontFamily: {
        // Distinctive cinematic typography
        display: ['"Bebas Neue"', 'Anton', 'sans-serif'],
        editorial: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'fade-in-slow': 'fadeIn 2.5s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'flicker': 'flicker 4s infinite',
        'grain': 'grain 8s steps(10) infinite',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(193, 18, 31, 0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(193, 18, 31, 0.7)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.95' },
          '52%': { opacity: '0.8' },
          '54%': { opacity: '1' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '30%': { transform: 'translate(3%, -8%)' },
          '50%': { transform: 'translate(-3%, 3%)' },
          '70%': { transform: 'translate(5%, 5%)' },
          '90%': { transform: 'translate(-8%, 1%)' },
        },
        scrollHint: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(10px)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      letterSpacing: {
        'cinematic': '0.3em',
        'wider-x': '0.15em',
      },
      backgroundImage: {
        'red-glow': 'radial-gradient(circle at center, rgba(193, 18, 31, 0.15) 0%, transparent 60%)',
        'film-grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
