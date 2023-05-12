<script lang="ts" setup>
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <button
    aria-label="Scroll To Top"
    rounded-full
    bg-white
    shadow-lg
    px-3 py-3 h-12 w-12
    fixed right-4 md:bottom-6 bottom-16
    dark:bg-dark
    @click="scrollToTop"
  >
    <Icon name="tabler:chevron-up" class="h-5 w-6 text-base" />
  </button>
</template>
