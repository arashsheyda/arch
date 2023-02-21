import { defineTheme } from 'pinceau'

export default defineTheme({
  color: {
    primary: {
      light: '#00cfff',
      sepia: '#00cfff',
      dark: '#00cfff',
    },
    secondary: {
      light: '#015eea',
      sepia: '#015eea',
      dark: '#015eea',
    },
    light: {
      light: '#ffffff',
      sepia: '#ffffff',
      dark: '#1e1e1e',
    },
    dark: {
      light: '#1e1e1e',
      sepia: '#1e1e1e',
      dark: '#ffffff',
    },
    body: {
      light: 'linear-gradient(145.44deg, #F2F4FA 0%, #FAFBFC 100%)',
      sepia: '#f1e7d0',
      dark: '#121212',
    },
    nav: {
      light: 'rgba(255, 255, 255, 0.5)',
      sepia: 'rgba(255, 255, 255, 0.3)',
      dark: 'rgb(18, 18, 18, 0.5)',
    },
    text: {
      light: '#3B4B5E',
      sepia: '#433422',
      dark: '#FCFCFC',
    },
  },
  border: {
    radius: {
      light: '10px',
      sepia: '10px',
      dark: '10px',
    },
    color: {
      light: '#E8EBED',
      sepia: '#E8EBED',
      dark: '#343739',
    },
  },
  shadow: {
    light: 'rgba(0, 0, 0, 0.1)',
    sepia: 'rgba(0, 0, 0, 0.2)',
    dark: 'rgba(0, 0, 0, 0.5)',
  },
})
