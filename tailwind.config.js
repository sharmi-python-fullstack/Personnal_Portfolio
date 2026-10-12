/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { display: ['"Playfair Display"', 'serif'], sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: { brand: { 50:'#fdf2f4',100:'#fbe6ea',200:'#f6ccd5',300:'#ee9fb2',400:'#dc6a85',500:'#b8344f',600:'#9a2340',700:'#7f1d37',800:'#6b1a31',900:'#5a1830' },
      forest: { 800:'#0e4130',900:'#0a3326',950:'#06231a' } },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        shimmer: { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '200% 50%' } },
      },
      animation: { float: 'float 6s ease-in-out infinite', blink: 'blink 1s steps(1) infinite', shimmer: 'shimmer 6s linear infinite' },
    },
  },
  plugins: [],
}
