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

const handleResize = () => {
  width.value = window.innerWidth
}

const handleNav = () => {
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
    window.addEventListener('scroll', handleNav)
    window.addEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleNav)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <nav
    id="arch-nav"
    ref="archNav"
    :class="{ 'md:rounded-lg md:bg-opacity-100 md:mx-20': !fixed }"
    class="md:sticky md:top-0 fixed bottom-0 right-0 left-0 -mt-7 backdrop-blur bg-opacity-50 z-999 flex justify-around bg-white dark:bg-slate-500 shadow-lg transition-all"
  >
    <NuxtLink
      v-for="item in tree"
      :key="item._path"
      :to="item._path"
      class="hover:bg-gray-100 hover:bg-opacity-50 relative text-center after:bg-gray-700 nav-item flex-1 dark:text-white block md:px-4 py-4 transition-all"
      :class="{ active: item.children && $route.path.includes(item._path) }"
    >
      <Icon v-if="item.icon" :name="item.icon" />
      {{ item.title }}
    </NuxtLink>
  </nav>
</template>

<style lang="scss">
.nav-item {
  @apply text-gray-600;
  &:hover {
    @apply text-black;
  }
  &.active {
    @apply text-primary;
    &:after {
      width: 100%;
      @apply bg-primary;
    }
  }
}

.nav-item {
  &:last-child {
    border-radius: 0px 8px 8px 0px;
  }
  &:first-child {
    border-radius: 8px 0px 0px 8px;
  }
  &:after {
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
}

.nav-item:hover::after {
  width: 100%;
}
</style>
