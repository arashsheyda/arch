<script lang="ts" setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <ArchButton label="Scroll To Top" variant="white" shadow="lg" text-color="black" rounded="full" class="fixed right-4 md:bottom-6 bottom-16 dark:bg-dark dark:text-white" @click="scrollToTop">
    <Icon name="tabler:chevron-up" class="h-5 w-6" />
  </ArchButton>
</template>
