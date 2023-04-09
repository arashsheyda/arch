import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.ts',
    './plugins/**/*.ts',
    './App.{ts,vue}',
    './app.{ts,vue}',
    './Error.{ts,vue}',
    './error.{ts,vue}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  coffeeMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--arch-color-primary)',
        secondary: 'var(--arch-color-secondary)',
        light: 'var(--arch-color-light)',
        dark: 'var(--arch-color-dark)',
        body: 'var(--arch-color-body)',
        nav: 'var(--arch-color-nav)',
        text: 'var(--arch-color-text)',
      },
      zIndex: {
        999: '999',
        9999: '9999',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('coffee', '&:is(.coffee *)')
    }),
  ],
}
