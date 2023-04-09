<script lang="ts" setup>
defineProps({
  links: {
    type: Array as PropType<any[]>,
    required: true,
  },
})
</script>

<template>
  <ul class="ml-2">
    <li v-for="toc in links" :key="toc.id" class="hover:text-primary my-1">
      <NuxtLink :class="[`toc-item h-${toc.depth}`, { active: $route.hash === `#${toc.id}` }]" :to="`#${toc.id}`">
        {{ toc.text }}
      </NuxtLink>
    </li>
  </ul>
</template>
