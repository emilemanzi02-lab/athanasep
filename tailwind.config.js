/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A3D62',
          50: '#F0F5F9',
          100: '#D9E6F0',
          200: '#B3CCE1',
          300: '#8DB3D2',
          400: '#5F8FBF',
          500: '#0A3D62',
          600: '#082c47',
          700: '#061F32',
          800: '#031018',
          900: '#010508',
        },
        secondary: {
          DEFAULT: '#F39C12',
          50: '#FEF6E7',
          100: '#FCE8C3',
          200: '#F8D58E',
          300: '#F4BD59',
          400: '#F0A524',
          500: '#F39C12',
          600: '#E67E22',
          700: '#CC6116',
          800: '#A34D12',
          900: '#7A390E',
        },
        dark: '#1A252F',
        light: '#F8F9FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
