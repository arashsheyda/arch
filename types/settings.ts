export type FontSize = `${number}px`
export type FontColor = `#${string}` | `var(--color-${string})`
export type FontFamily = 'Poppins' | 'sans-serif' | 'Courier' | 'monospace'

export interface Settings {
  sidebar: {
    minimized: boolean
  }
  font: {
    size: FontSize
    color: FontColor
    family: FontFamily
  }
}
