import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior (to, from, savedPosition) {
    const nuxtApp = useNuxtApp()
    const content = <HTMLElement>document.getElementById('box-content')
    const navHeight = document.getElementById('main-nav')?.offsetHeight || 0
    const bannerHeight = document.getElementById('main-banner')?.offsetHeight || 0
    const navPosition = (bannerHeight - navHeight) + 10

    // If history back
    if (savedPosition) {
      // Handle Suspense resolution
      return new Promise((resolve) => {
        nuxtApp.hooks.hookOnce('page:finish', () => {
          setTimeout(() => resolve(savedPosition), 0)
        })
      })
    }

    // window.addEventListener('scroll', () => {
    //   console.log(window.scrollY)
    // })

    // Scroll to heading on click
    if (to.hash) {
      setTimeout(() => {
        let heading = document.querySelector(`[id="${to.hash.replace('#', '')}"]`) as any

        if (!heading) { heading = document.querySelector(`[href$="${to.hash}"]`) as any }

        if (!heading) { return }
        return window.scrollTo({
          top: heading.offsetTop + navPosition,
          behavior: 'smooth'
        })
      })
      return
    }

    // route change
    if (from.path !== to.path) {
      if (window.innerWidth > 787) {
        window.scrollTo({
          top: navPosition,
          behavior: 'smooth'
        })
      } else {
        window.scrollTo({
          top: content.offsetTop + (navHeight * 2),
          behavior: 'smooth'
        })
      }
      return
    }

    // If same route, do nothing
    if (to.path === from.path) {
      return
    }

    return { top: 0 }
  }
}
