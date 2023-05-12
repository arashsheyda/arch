<script lang="ts" setup>
const { page } = useContent()

const route = useRoute()

const [prev, next] = await queryContent()
  .only(['_path', 'title'])
  .sort({ date: 1 })
  .findSurround(route.path)

const show = ref(false)
const showContent = ref(false)
const showSettings = ref(false)
const showNavigation = ref(false)

function toggleShow(name?: string) {
  if (name === 'content') {
    show.value = true
    showContent.value = true
    showSettings.value = false
    showNavigation.value = false
  }

  else if (name === 'settings') {
    show.value = true
    showSettings.value = true
    showContent.value = false
    showNavigation.value = false
  }

  else if (name === 'navigation') {
    show.value = true
    showNavigation.value = true
    showContent.value = false
    showSettings.value = false
  }
  else {
    show.value = false
    showContent.value = false
    showSettings.value = false
    showNavigation.value = false
  }
}

onMounted(() => {
  const tocItems = document.querySelectorAll('.toc-item')

  function updateActiveTocItem() {
    const fromTop = window.scrollY
    tocItems.forEach((link: any) => {
      const section = document.querySelector(link.hash)
      link.classList.toggle('active', section && section.offsetTop - 70 <= fromTop)
    })
  }

  window.addEventListener('scroll', updateActiveTocItem)
})
</script>

<template>
  <div grid="~ cols-12" gap-5>
    <ArchBox md:col-span-9 pb20 p4 mt--32 mb16 md-mt0 md-mb0>
      <ArchBreadcrumb />
      <div class="article-content" mb4 dark:text-white>
        <header v-if="!page._empty" class="header-post">
          <h1>{{ page.title }}</h1>
          <div v-if="page.description" class="caption-post">
            <p>{{ page.description }}</p>
          </div>
          <div v-if="page.image" class="header-post__image-wrap">
            <ProseImg class="cover" :src="page.image" :alt="page.title" :zoomable="true" />
          </div>
        </header>

        <div :class="{ 'shadow-lg': show }" md-hidden sticky top-0 bg-base bg-opacity-50 backdrop-blur p4 rounded-lg z-10 my4 border dark:border-gray-500>
          <div flex justify-between>
            <button aria-label="Content" :class="{ 'text-primary': showContent }" @click="toggleShow('content')">
              <Icon name="uil:list-ui-alt" />
              Content
            </button>
            <button aria-label="Settings" :class="{ 'text-primary': showSettings }" class="border-gray-300 dark:border-gray-500 border-r border-l px-3" @click="toggleShow('settings')">
              <Icon name="uil:setting" />
              Settings
            </button>
            <button aria-label="Navigation" :class="{ 'text-primary': showNavigation }" @click="toggleShow('navigation')">
              <Icon name="uil:list-ul" />
              Navigation
            </button>
          </div>
          <div v-if="show" class="mt4">
            <hr class="my-4">
            <div v-if="showContent">
              <ArchPostToc :links="page.body.toc.links" />
            </div>
            <div v-if="showSettings">
              <ArchPostSettings />
            </div>
            <div v-if="showNavigation">
              <ArchPostNavigation :prev="prev" :next="next" />
            </div>
            <button aria-label="Close" class="mt4 w-full bg-primary text-white" size="xs" @click="toggleShow()">
              <Icon name="tabler:x" />
              Close
            </button>
          </div>
        </div>
        <slot />
        <ArchFooter />
      </div>
    </ArchBox>

    <ArchSidebar class="md:col-span-3 md:block hidden">
      <ArchBox v-if="page.body.toc.links.length" title="Table Of Contents" icon="uil:list-ui-alt" :hideable="true" class="p-5 mb5">
        <ArchPostToc :links="page.body.toc.links" />
      </ArchBox>

      <ArchBox title="Settings" icon="uil:setting" :hideable="true" class="p-5 mb5">
        <ArchPostSettings />
      </ArchBox>

      <ArchBox title="Navigation" icon="uil:list-ul" :divider="false" :hideable="true" class="p-5 mb5">
        <ArchPostNavigation :prev="prev" :next="next" />
      </ArchBox>
    </ArchSidebar>
  </div>
</template>
