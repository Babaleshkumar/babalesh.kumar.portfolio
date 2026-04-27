import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0e27',
        surface: '#1a2847',
        'surface-light': '#273456',
        accent: '#fbbf24',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px', letterSpacing: '0.3px' }],
        sm: ['14px', { lineHeight: '20px', letterSpacing: '0.25px' }],
        base: ['16px', { lineHeight: '24px', letterSpacing: '0' }],
        lg: ['18px', { lineHeight: '28px', letterSpacing: '-0.5px' }],
        xl: ['20px', { lineHeight: '28px', letterSpacing: '-0.5px' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.5px' }],
        '3xl': ['30px', { lineHeight: '36px', letterSpacing: '-1px' }],
        '4xl': ['36px', { lineHeight: '40px', letterSpacing: '-1px' }],
        '5xl': ['48px', { lineHeight: '48px', letterSpacing: '-1.5px' }],
      },
      letterSpacing: {
        tighter: '-1.5px',
        tight: '-0.5px',
        normal: '0',
        wide: '0.5px',
        wider: '1px',
        widest: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config
