<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'

const { navigation } = useContent()
const arch = useArch()

const filtered = computed(() => arch.value.navigation?.exclude || [])

const tree = computed(() => {
  return (navigation.value || []).filter((item: any) => {
    if (filtered.value.includes(item._path as never))
      return false
    return true
  })
})

const { width } = useWindowSize()
const navbarRef = ref<HTMLElement>()
const navbarRefPosition = ref<number>(0)

watch(width, () => {
  if (width.value > 787) {
    navbarRefPosition.value = navbarRef.value!.offsetTop
    navbarRef.value!.classList.add('fixed-nav')
  }
  else {
    navbarRef.value!.classList.remove('fixed-nav')
  }
})

function addClass() {
  if (width.value > 787) {
    if (window.scrollY > navbarRefPosition.value)
      navbarRef.value!.classList.add('fixed-nav')
    else
      navbarRef.value!.classList.remove('fixed-nav')
  }
  else {
    navbarRef.value!.classList.remove('fixed-nav')
  }
}

onMounted(() => {
  navbarRefPosition.value = navbarRef.value!.offsetTop
  window.addEventListener('scroll', addClass)
})
</script>

<template>
  <nav id="main-nav" ref="navbarRef" class="nav">
    <NuxtLink v-for="item in tree" :key="item._path" :to="item._path" class="nav-item" :class="{ active: item.children && $route.path.includes(item._path) }">
      <Icon v-if="item.icon" :name="item.icon" />
      {{ item.title }}
    </NuxtLink>
    <ArchColorMode />
  </nav>
</template>

<style lang="scss">
.nav {
  position: absolute;
  z-index: 9999;
  right: 8%;
  left: 8%;
  padding: 0px;
  display: flex;
  border-radius: var(--border-radius);
  margin-bottom: 20px;
  justify-content: space-around;
  background: var(--color-light);
  box-shadow: 0 0px 17px var(--box-shadow);
  transition: all 0.3s ease-in-out;

  .nav-item {
    display: block;
    padding: 1rem 0px 0.7rem 0px;
    color: var(--color-dark);
    text-decoration: none;

    &.active {
      color: var(--color-primary);
      text-shadow: 0 0 13px var(--color-primary);

      svg {
        filter: drop-shadow(0 0 13px var(--color-primary));
      }

      &::after {
        width: 100%;
        background: var(--color-primary);
        transition: all 0.3s ease;
      }
    }

    &::after {
      content: '';
      width: 0%;
      height: 2px;
      display: block;
      margin-top: 5px;
      margin-left: 3px;
      background: var(--color-dark);
      transition: all 0.3s ease;
    }

    &:hover {
      &::after {
        width: 100%;
        transition: all 0.3s ease;
      }
    }
  }

  &.fixed-nav {
    max-width: 100%;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    border-radius: 0;
    background: var(--color-nav);
    backdrop-filter: blur(10px);
    box-shadow: 0 3px 17px rgba($color: #000, $alpha: 0.3);
    padding: 5px 0;
  }
}

@media (max-width: 767px) {
  .nav {
    background: var(--color-nav);
    backdrop-filter: blur(12px);
    position: fixed;
    width: 100%;
    border-radius: 0px;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 9999;
    padding: 10px 0px;
    margin: 0;

    .nav-item {
      position: relative;
      text-align: center;
      flex: 1;

      &::after {
        position: absolute;
        bottom: -10px;
        left: 0;
      }

      &.active {
        &::after {
          width: 100%;
        }
      }
    }
  }
}
</style>
