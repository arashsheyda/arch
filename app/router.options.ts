/* eslint-disable no-console */
import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp()
    const contentTop = document.getElementById('arch-content')?.offsetTop || 0
    const navHeight = document.getElementById('arch-nav')?.offsetHeight || 0
    const bannerHeight = document.getElementById('arch-banner')?.offsetHeight || 0
    const navPosition = (bannerHeight - navHeight) + 10

    // window.addEventListener('scroll', () => {
    //   console.log(window.scrollY)
    // })

    // If history back
    if (savedPosition) {
      return new Promise((resolve) => {
        nuxtApp.hooks.hookOnce('page:finish', () => {
          setTimeout(() => resolve(savedPosition), 0)
        })
      })
    }

    // Scroll to heading on click
    if (to.hash) {
      setTimeout(() => {
        let heading = document.querySelector(`[id="${to.hash.replace('#', '')}"]`) as any

        if (!heading)
          heading = document.querySelector(`[href$="${to.hash}"]`) as any

        if (!heading)
          return
        if (window.innerWidth > 787) {
          return window.scrollTo({
            top: heading.offsetTop + navPosition + 50,
            behavior: 'smooth',
          })
        }
        else {
          return window.scrollTo({
            top: heading.offsetTop + navHeight + 25,
            behavior: 'smooth',
          })
        }
      })
      return
    }

    // route change
    if (from.path !== to.path) {
      if (window.innerWidth > 787) {
        window.scrollTo({
          top: navPosition,
          behavior: 'smooth',
        })
      }
      else {
        window.scrollTo({
          top: contentTop * 2,
          behavior: 'smooth',
        })
      }
      return
    }

    // If same route, do nothing
    if (to.path === from.path)
      return

    return { top: 0 }
  },
}
