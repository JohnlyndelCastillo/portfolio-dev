/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F6F1',
        surface: '#FFFFFF',
        ink: {
          DEFAULT: '#111614',
          muted: '#5C635F',
          soft: '#6B726E',
        },
        line: '#E4E1D8',
        accent: {
          DEFAULT: '#0F766E',
          dark: '#0B5C55',
          soft: '#E7F1ED',
        },
        signal: '#2F9E76',
      },
      fontFamily: {
        display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(17, 22, 20, 0.04), 0 12px 32px -20px rgba(17, 22, 20, 0.18)',
        lift: '0 2px 4px rgba(17, 22, 20, 0.04), 0 20px 40px -24px rgba(17, 22, 20, 0.24)',
        report: '0 24px 60px -24px rgba(17, 22, 20, 0.45)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        page: '1180px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
