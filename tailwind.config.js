/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0f0f0f',
          secondary: '#151515',
          tertiary: '#1a1a1a',
          900: '#0a0a0a',
          800: '#0f0f0f',
        },
        accent: {
          50: '#f5f3f0',
          100: '#e8e3dc',
          200: '#d4c4b3',
          300: '#c0a598',
          400: '#a8937f',
          500: '#907d6b',
          600: '#786a5c',
          700: '#60564a',
          800: '#483f37',
          900: '#302620',
        },
        text: {
          primary: '#f5f3f0',
          secondary: '#d4c4b3',
          muted: '#a8937f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['28px', '36px'],
        '4xl': ['36px', '44px'],
        '5xl': ['48px', '56px'],
        '6xl': ['60px', '72px'],
        '7xl': ['72px', '90px'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
      },
      boxShadow: {
        'card': '0 8px 32px 0 rgba(212, 196, 179, 0.08)',
        'card-lg': '0 12px 48px 0 rgba(212, 196, 179, 0.12)',
        'glow-tan': '0 0 20px rgba(212, 196, 179, 0.25)',
        'glow-tan-lg': '0 0 40px rgba(212, 196, 179, 0.3)',
        'glass': '0 8px 32px 0 rgba(212, 196, 179, 0.08)',
        'glass-lg': '0 12px 48px 0 rgba(212, 196, 179, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scroll-indicator': 'scrollIndicator 2s ease-in-out infinite',
        'word-appear': 'wordAppear 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(200, 180, 160, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(200, 180, 160, 0.5)',
          },
        },
        scrollIndicator: {
          '0%, 100%': { 
            transform: 'translateY(0)',
            opacity: '1',
          },
          '50%': { 
            transform: 'translateY(8px)',
            opacity: '0.5',
          },
        },
        wordAppear: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};
