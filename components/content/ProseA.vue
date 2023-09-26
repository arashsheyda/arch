<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})
</script>

<template>
  <NuxtLink :href="href" class="prose-a" :target="target">
    <slot />
  </NuxtLink>
</template>
