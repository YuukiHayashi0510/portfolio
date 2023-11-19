import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nextjs: {
          start: 'rgb(214,219,220)',
          mid: 'rgb(235,237,238)',
          end: 'rgb(255,255,255)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '2.5xl': '28px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
