import { defineConfig, presetAttributify, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-base': 'bg-slate-100 dark:bg-dark',
    'border-base': 'border-slate-200 dark:border-gray-700',
    'bg-glass': 'bg-base bg-opacity-50 dark:bg-opacity-50 backdrop-blur',
    'bg-base-dark': 'bg-slate-100 dark:bg-darker',
    'text-base': 'text-black dark:text-white',
    'text-base-light': 'text-gray-500 dark:text-gray-300',

    'a-divider': 'border-b border-base my4',
  },
  theme: {
    // TODO:
    colors: {
      primary: '#00cfff',
      secondary: '#0150C6',
      light: '',
      lighter: '',
      dark: '#1f1f1f',
      darker: '#121212',
      body: '',
      nav: '',
      text: '',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
