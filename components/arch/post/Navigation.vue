<script lang="ts" setup>
defineProps({
  next: {
    type: Object,
    default: null,
    required: false,
  },
  prev: {
    type: Object,
    default: null,
    required: false,
  },
})
</script>

<template>
  <div class="flex justify-between">
    <NuxtLink v-if="prev && prev?._path.includes('blog')" :to="prev._path" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
      <Icon name="uil:arrow-left" />
      Prevoius
    </NuxtLink>
    <NuxtLink v-if="next && next?._path.includes('blog')" :to="next._path" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
      Next
      <Icon name="uil:arrow-right" />
    </NuxtLink>
  </div>
</template>
