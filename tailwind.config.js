/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary accent color
        primary: '#0080FF',
        'primary-dark': '#0066CC',
        'primary-light': '#3399FF',
        // v3 gradient colors
        'deep-teal': '#0080FF',
        'light-teal': '#5CA9FF',
        'pale-teal': '#99CCFF',
        'glass-white': 'rgba(255, 255, 255, 0.85)',
        'stone-200': '#E7E5E4',
        'stone-300': '#D6D3D1',
        'stone-400': '#A8A29E',
      },
      fontFamily: {
        // Executive luxury fonts
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/windy-landscape.png')",
        'gradient-elegant': 'linear-gradient(135deg, #0080FF 0%, #5CA9FF 100%)',
        'gradient-subtle': 'linear-gradient(180deg, rgba(153, 204, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
        'gradient-glass': 'linear-gradient(120deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
      },
      boxShadow: {
        'elegant': '0 10px 30px rgba(44, 62, 80, 0.1)',
        'elegant-hover': '0 15px 40px rgba(44, 62, 80, 0.15)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}