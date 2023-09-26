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
  <nav class="md:flex justify-between mb-4" aria-label="Breadcrumb">
    <ol class="inline-flex text-base-light">
      <li class="items-center">
        <NuxtLink to="/" class="items-center text-sm font-medium" hover="text-white">
          Home
        </NuxtLink>
      </li>
      <li v-for="(item, index) in paths" :key="index" class="items-center capitalize">
        <Icon name="uil:angle-right" />
        <NuxtLink class="text-sm font-medium" :class="item.active ? 'text-white' : 'hover-text-white'" :to="item.url">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ol>
    <slot />
  </nav>
</template>
