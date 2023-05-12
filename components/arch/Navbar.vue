<script lang="ts" setup>
const { navigation } = useContent()

const filtered = computed(() => [])

const archNav = ref<HTMLElement>()
const navPosition = ref<number>(0)
const fixed = ref<boolean>(false)
const width = ref<number>(0)

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
    :class="{ 'md:rounded-lg md:bg-opacity-100 md:mx-20': !fixed }"
    class="md:sticky md:top-0 fixed bottom-0 right-0 left-0 -mt-7 backdrop-blur bg-opacity-50 z-999 flex justify-around bg-white dark:bg-dark shadow-xl transition-all"
  >
    <NuxtLink
      v-for="item in tree"
      :key="item._path"
      :to="item._path"
      text-center
      py4
      flex-1
      md="px4"
      text-gray-600 dark:text-white hover:dark:text-white
      hover:bg-gray-100 hover:dark:bg-neutral-800 hover:bg-opacity-50 relative
      hover="text-black after:w-full after:bg-gray-700 dark:after:bg-gray-300"
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
