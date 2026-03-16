import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        ui: ['Tenor Sans', 'sans-serif'],
        body: ['Jost', 'sans-serif'],
      },
      colors: {
        'black': '#1A1A1A',
        'charcoal': '#2C2C2C',
        'mid': '#5A5A5A',
        'silver': '#B3B3B3',
        'silver-dark': '#4A4A4A',
        'marble': '#F8F8F8',
        'marble-vein': '#E5E5E5',
      },
      animation: {
        'float-up': 'floatUp 4s ease-in-out infinite',
        'rotate-badge': 'rotateBadge 8s linear infinite',
        'wa-pulse': 'waPulse 2.8s ease-in-out infinite',
      },
      keyframes: {
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        rotateBadge: {
          'from': { borderColor: '#d0d0d0 #8a8a8a #d0d0d0 #8a8a8a' },
          '50%': { borderColor: '#8a8a8a #d0d0d0 #8a8a8a #d0d0d0' },
          'to': { borderColor: '#d0d0d0 #8a8a8a #d0d0d0 #8a8a8a' },
        },
        waPulse: {
          '0%, 100%': { boxShadow: '0 4px 18px rgba(37,211,102,0.4)' },
          '50%': { boxShadow: '0 4px 28px rgba(37,211,102,0.65)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
