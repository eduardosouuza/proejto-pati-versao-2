/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#0076BD',
        'primary-light': '#3D9AD1',
        'primary-dark': '#005A8F',
        secondary: '#F9F7F4',
        'secondary-light': '#FFFFFF',
        'secondary-dark': '#EAE8E4',
        accent: '#FF8C38',
        'accent-light': '#FFA866',
        'accent-dark': '#E67A2B',
        neutral: {
          50: '#F9F9F9',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#868E96',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      height: {
        'screen-90': '90vh',
        'screen-80': '80vh',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};