<script lang="ts" setup>
defineProps({
  toc: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <li>
    <a :class="[`toc-item h-${toc.depth}`, { active: $route.hash === `#${toc.id}` }]" :href="`#${toc.id}`">
      {{ toc.text }}
    </a>
    <ArchTocItem v-for="link in toc.children" :key="link.id" :toc="link" />
  </li>
</template>

<style lang="scss">

</style>
