<script lang="ts" setup>
defineProps({
  link: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <li dark-text-white hover-text-primary my1>
    <NuxtLink :class="[`link-item h-${link.depth}`, { active: $route.hash === `#${link.id}` }]" :to="`#${link.id}`">
      {{ link.text }}
    </NuxtLink>
    <ArchPostTocItem v-for="child in link.children" :key="child.id" :link="child" />
    <!-- <ArchPostTocItem v-for="link in toc.children" :key="link.id" :toc="link" /> -->
  </li>
</template>
