<script lang="ts" setup>
defineProps({
  links: {
    type: Array as PropType<any[]>,
    required: true,
  },
})
</script>

<template>
  <ul ml2>
    <ArchPostTocItem v-for="link in links" :key="link.id" :link="link" />
  </ul>
</template>
