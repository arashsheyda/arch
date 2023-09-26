<script lang="ts" setup>
defineProps<{
  hideBanner: boolean
}>()

const { navigation } = useContent()

const filtered = computed(() => [])

const archNav = ref<HTMLElement>()
const navPosition = ref(0)
const fixed = ref(false)
const width = ref(0)

const tree = computed(() => {
  return (navigation.value || []).filter((item: any) => {
    if (filtered.value.includes(item._path as never))
      return false
    return true
  })
})

function handleResize() {
  width.value = window.innerWidth
}

function handleNav() {
  if (width.value > 787) {
    if (window.scrollY > navPosition.value)
      fixed.value = true
    else
      fixed.value = false
  }
  else {
    fixed.value = false
  }
}

onMounted(() => {
  handleResize()
  if (archNav.value) {
    navPosition.value = archNav.value.offsetTop
    useEventListener('scroll', handleNav)
    useEventListener('resize', handleResize)
  }
})
</script>

<template>
  <nav
    id="arch-nav"
    ref="archNav"
    :class="{ 'md:rounded-lg md:mx-20 md:bg-opacity-100 md:dark:bg-opacity-100': !fixed && !hideBanner }"
    class="font-medium md:sticky md:top-0 fixed bottom-0 right-0 left-0 -mt-7 z-999 flex justify-around bg-glass shadow-xl transition-all"
  >
    <NuxtLink
      v-for="item in tree"
      :key="item._path"
      :to="item._path"
      flex="~ 1 justify-center items-center gap-1"
      py4 md="px4"
      text-gray-600 dark:text-white hover:dark:text-white relative
      hover="bg-gray-100 dark:bg-neutral-800 bg-opacity-50 dark:bg-opacity-30 text-black after:w-full after:bg-gray-700 dark:after:bg-gray-300"
      active-class="text-primary! after:w-full! after:bg-primary!"
      transition-all
      class="nav-item"
      :class="{ 'text-primary! after:w-full! after:bg-primary!': item.children && $route.path.includes(item._path) }"
    >
      <Icon v-if="item.icon" :name="item.icon" />
      {{ item.title }}
    </NuxtLink>
  </nav>
</template>

<style>
.nav-item::after {
  content: "";
  display: block;
  height: 2px;
  margin: 0;
  transition: all .3s ease;
  width: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
