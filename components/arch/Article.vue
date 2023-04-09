<script lang="ts" setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="group max-w-sm bg-white rounded-lg shadow-lg transition-all">
    <NuxtLink :to="item._path">
      <ProseImg :rounded="false" class="rounded-t-lg" :src="item.image" :alt="item.title" />
    </NuxtLink>
    <div class="p-5">
      <NuxtLink :to="item._path" class="">
        <h5 class="group-hover:text-primary mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition-all">
          {{ item.title }}
        </h5>
      </NuxtLink>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>
