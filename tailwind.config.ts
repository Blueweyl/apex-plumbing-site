import type { Config } from 'tailwindcss'

const config: Config = {
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
      },
      letterSpacing: {
        tighter: '-0.5px',
        tight: '-0.3px',
      },
    },
  },
  plugins: [],
}
export default config
