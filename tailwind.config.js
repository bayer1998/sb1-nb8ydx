/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ae0000',
        'primary-light': '#ff0000',
        'primary-dark': '#8b0000',
        secondary: '#424242',
        'secondary-light': '#6d6d6d',
        'secondary-dark': '#1b1b1b',
        accent: '#FF4D4D',
        tertiary: '#FF3333',
        dark: '#1A1A1A',
        light: '#FFFFFF'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #ff0000 0%, #ae0000 100%)',
        'gradient-dark': 'linear-gradient(135deg, #424242 0%, #1b1b1b 100%)',
        'gradient-accent': 'linear-gradient(45deg, #ae0000 0%, #ff0000 50%, #ae0000 100%)',
        'gradient-hero': 'linear-gradient(to right, rgba(174, 0, 0, 0.9), rgba(66, 66, 66, 0.9))',
        'gradient-card': 'linear-gradient(135deg, rgba(174, 0, 0, 0.1) 0%, rgba(255, 0, 0, 0.1) 100%)'
      }
    }
  },
  plugins: []
};