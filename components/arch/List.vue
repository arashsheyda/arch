<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <ProseA :href="item._path">
    {{ item.title }}
  </ProseA>
</template>
