import { defineConfig, presetAttributify, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'bg-base': 'bg-light dark:bg-dark',
      'bg-body': 'bg-lighter dark:bg-darker',
      'border-base': 'border-slate-200 dark:border-gray-700',
      'bg-glass': 'bg-base bg-opacity-50 dark:bg-opacity-50 backdrop-blur',
      'text-base': 'text-black dark:text-white',
      'text-base-light': 'text-gray-500 dark:text-gray-300',

      'a-divider': 'border-b border-base my4',
      'shadow-base': 'shadow-lg',
    },
    [/^button-(\w+)$/, $ => `inline-flex items-center justify-center px-3 py-1 border border-transparent rounded-md shadow text-white font-medium bg-${$[1]} hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${$[1]}`],
  ],
  theme: {
    // TODO:
    colors: {
      primary: '#00cfff',
      secondary: '#0150C6',
      light: '#ffffff',
      lighter: '#f3f5fb',
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
