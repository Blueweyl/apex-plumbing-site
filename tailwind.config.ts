import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'system-ui', 'sans-serif'],
      },
      colors: {
        apple: {
          blue: '#0071E3',
          'blue-hover': '#0077ED',
          'blue-light': '#EBF4FF',
          dark: '#1D1D1F',
          secondary: '#6E6E73',
          tertiary: '#AEAEB2',
          surface: '#F5F5F7',
          border: '#D2D2D7',
          'border-subtle': '#E8E8ED',
        },
        status: {
          green: '#34C759',
          'green-bg': '#F0FFF4',
          amber: '#FF9F0A',
          'amber-bg': '#FFF8EC',
          red: '#FF3B30',
          'red-bg': '#FFF1F0',
        },
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
        'elevated': '0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)',
        'float': '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
        'modal': '0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)',
        'glow-blue': '0 0 0 4px rgba(0, 113, 227, 0.12), 0 4px 20px rgba(0, 113, 227, 0.20)',
        'glow-green': '0 0 0 4px rgba(52, 199, 89, 0.12), 0 4px 20px rgba(52, 199, 89, 0.20)',
        'lift': '0 16px 48px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)',
        'lift-blue': '0 16px 48px rgba(0,113,227,0.14), 0 4px 12px rgba(0,113,227,0.08)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 113, 227, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 113, 227, 0.40)' },
        },
        'ticker': {
          '0%': { transform: 'translateY(0)' },
          '33%': { transform: 'translateY(-33.33%)' },
          '66%': { transform: 'translateY(-66.66%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'bar-fill': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-reverse': 'float-reverse 8s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-up': 'fade-up 0.6s ease both',
        'scale-in': 'scale-in 0.5s ease both',
        'slide-in-left': 'slide-in-left 0.5s ease both',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'ticker': 'ticker 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
