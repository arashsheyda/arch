<script lang="ts" setup>
const arch = useArch()
const { navigation, page } = useContent()
const { navKeyFromPath } = useContentHelpers()
const { scrollPosition } = useScrollPosition()

const gradient = 'linear-gradient(to right, var(--color-secondary), var(--color-primary))'

const titleTemplate = computed(() => {
  const appTitleTemplate = `%s | ${arch?.value?.title}`
  if (page.value)
    return page.value.head?.titleTemplate || navKeyFromPath(page.value._path, 'titleTemplate', navigation.value || []) || appTitleTemplate

  return appTitleTemplate
})

function getMeta(name: string) {
  if (page.value) {
    const meta = page.value.head?.meta?.find((meta: { name: string }) => meta.name === name)
    if (meta)
      return meta.content

    return arch.value[name] || ''
  }
  return ''
}

const metas = computed(() => {
  if (page.value) {
    return [
      {
        name: 'description',
        content: page.value.description || getMeta('description'),
      },
      {
        name: 'keywords',
        content: page.value.keywords || getMeta('keywords'),
      },
      {
        name: 'og:url',
        content: arch.value.url + page.value._path,
      },
      {
        name: 'og:locale',
        content: arch.value.locale,
      },
      {
        name: 'og:site_name',
        content: arch.value.title,
      },
      {
        name: 'og:type',
        content: 'website',
      },
      {
        name: 'og:title',
        content: page.value.head?.title || navKeyFromPath(page.value._path, 'title', navigation.value || []),
      },
      {
        name: 'og:description',
        content: page.value.description || getMeta('description'),
      },
      {
        name: 'og:image',
        content: arch.value.url + (page.value.image || arch.value.image),
      },
      {
        name: 'og:image:alt',
        content: page.value?.imageAlt || page.value.head?.title || navKeyFromPath(page.value._path, 'title', navigation.value || []),
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: page.value.head?.title || navKeyFromPath(page.value._path, 'title', navigation.value || []),
      },
      {
        name: 'twitter:description',
        content: page.value.description || getMeta('description'),
      },
      {
        name: 'twitter:url',
        content: arch.value.url + page.value._path,
      },
      {
        name: 'twitter:image',
        content: arch.value.url + (page.value.image || arch.value.image),
      },
      {
        name: 'twitter:image:alt',
        content: page.value.head?.title || navKeyFromPath(page.value._path, 'title', navigation.value || []),
      },
      {
        name: 'theme-color',
        content: arch.value.themeColor,
      },
    ]
  }
  return []
})

useHead({
  titleTemplate: titleTemplate.value,
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: arch.value.favicon || '/favicon.ico',
    },
  ],
  meta: metas,
})
</script>

<template>
  <div class="arch-layout">
    <NuxtLoadingIndicator :color="gradient" />
    <NuxtScrollIndicator :color="gradient" element-id="main-nav" :border-radius="7" />
    <main class="main">
      <div class="container gutter-top">
        <ArchBanner id="main-banner" />
        <div class="row">
          <ArchNavbar />
          <div class="col-12 arch-layout-page">
            <slot />
          </div>
        </div>
      </div>
    </main>
    <Transition name="slide-top">
      <ArchScrollToTop v-if="scrollPosition > 277" />
    </Transition>
    <Transition name="slide-top">
      <ArchColorMode v-if="scrollPosition > 277" fixed />
    </Transition>
  </div>
</template>

<style lang="ts">

</style>

<style lang="scss">
.box-content {
  min-width: 100%;
  min-height: 100%;

  main {
    margin-bottom: 55px;
  }
}

.nuxt-loading-indicator {
  box-shadow: 0px 0px 3px var(--color-primary);
}

.arch-layout-page {
  margin-top: 80px;
  margin-bottom: 20px;
}

.slide-top-enter-active,
.slide-top-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}

.slide-top-enter-from,
.slide-top-leave-to {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
}
</style>
