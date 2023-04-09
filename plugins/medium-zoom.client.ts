import zoom from 'medium-zoom'

const initZoom = () => {
  zoom('img.zoomable:not(.medium-zoom-image)', {
    margin: 50,
  })
}

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.mixin({
    mounted() {
      initZoom()
    },
    updated() {
      initZoom()
    },
  })
})
