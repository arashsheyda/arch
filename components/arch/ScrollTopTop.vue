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
    h-12 w-12
    fixed right-5 border="~ base" md:bottom-6 bottom-16
    dark:bg-dark z-99
    @click="scrollToTop"
  >
    <Icon name="tabler:chevron-up" class="h-6 w-6 text-base" />
  </button>
</template>
