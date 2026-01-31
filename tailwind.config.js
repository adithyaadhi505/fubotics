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
          primary: '#030305', // Deepest Black-Blue
          secondary: '#080812', // Dark Violet-Black
          tertiary: '#0F0F1A', // Midnight Violet
          900: '#030305',
          800: '#080812',
          700: '#0F0F1A',
        },
        accent: {
          50: '#F0F4FF', // Ice Blue
          100: '#E0E8FF',
          200: '#C2D1FF',
          300: '#94B0FF',
          400: '#5C85FF', // Primary Brand Blue (like in image)
          500: '#3D5EFF', // Vivid Blue
          600: '#2E4CFF',
          700: '#1A29D6',
          800: '#0A1530', // Deep Blue Text/BG
          900: '#050A1A',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B4C6FF', // Pale Blue-Gray
          muted: '#6B7A99', // Muted Blue-Gray
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
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
        'card': '0 8px 32px 0 rgba(10, 21, 48, 0.5)',
        'card-lg': '0 12px 48px 0 rgba(10, 21, 48, 0.7)',
        'glow-blue': '0 0 25px rgba(92, 133, 255, 0.3)', // Primary Blue Glow
        'glow-violet': '0 0 25px rgba(124, 58, 237, 0.3)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.2)',
        'glass-lg': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scroll-indicator': 'scrollIndicator 2s ease-in-out infinite',
        'word-appear': 'wordAppear 0.8s ease-out forwards',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'pulse-tech': 'pulseTech 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
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
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(50px)' },
        },
        pulseTech: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};
