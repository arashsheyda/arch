<script lang="ts" setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <NuxtLink to="#" class="group flex items-center md:justify-start justify-center md:my-6">
    <div class="bg-gray-100 dark:bg-darker h-10 w-10 flex justify-center items-center rounded-lg group-hover:border-primary mr-2 border-2 border-transparent transition-all">
      <Icon class="text-primary" :name="icon" />
    </div>
    <div class="md:block hidden">
      <span class="text-gray-500 dark:text-slate-400 block text-xs uppercase">{{ title }}</span>
      <p class="font-medium text-sm dark:text-white">
        {{ value }}
      </p>
    </div>
  </NuxtLink>
</template>
