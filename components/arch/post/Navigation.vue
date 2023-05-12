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
  directory: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div flex justify-between>
    <NuxtLink v-if="prev && directory === prev._dir" :to="prev._path" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-dark dark:border-gray-500">
      <Icon name="uil:arrow-left" />
      Previous
    </NuxtLink>
    <NuxtLink v-if="next && directory === next._dir" :to="next._path" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-dark dark:border-gray-500">
      Next
      <Icon name="uil:arrow-right" />
    </NuxtLink>
  </div>
</template>
