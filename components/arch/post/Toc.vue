<script lang="ts" setup>
defineProps({
  links: {
    type: Array as PropType<any[]>,
    required: true,
  },
})
</script>

<template>
  <ul v-if="links.length" ml2>
    <ArchPostTocItem v-for="link in links" :key="link.id" :link="link" />
  </ul>
  <span v-else>
    No Table of Content
  </span>
</template>
