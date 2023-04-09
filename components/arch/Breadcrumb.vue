<script lang="ts" setup>
const route = useRoute()

const paths = computed(() => {
  const cPath = route.path.substring(1).split('/')
  return cPath.map((name, i) => ({
    name: name.replace(/-/g, ' '),
    url: `/${cPath.slice(0, i + 1).join('/')}`,
    active: i === cPath.length - 1,
  }))
})
</script>

<template>
  <nav class="flex mb-4" aria-label="Breadcrumb">
    <ol class="inline-flex space-x-1">
      <li class="inline-flex items-center">
        <NuxtLink to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white">
          Home
        </NuxtLink>
      </li>
      <li v-for="(item, index) in paths" :key="index" class="inline-flex items-center capitalize">
        <Icon name="uil:angle-right" />
        <NuxtLink :class="item.active ? 'text-gray-500' : 'text-gray-700 hover:text-primary  dark:hover:text-white'" :to="item.url" class="text-sm font-medium dark:text-gray-400">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>
