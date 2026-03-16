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
        'black': '#0F0F0F',
        'charcoal': '#2C2C2C',
        'mid': '#6B6B6B',
        'silver': '#A8A8A8',
        'silver-dark': '#555555',
        'marble': '#FAFAFA',
        'marble-vein': '#E8E8E8',
        'border': '#D9D9D9',
        'cyan': '#00BCD4',
        'cyan-light': '#E0F7FA',
        'cyan-dark': '#0097A7',
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
