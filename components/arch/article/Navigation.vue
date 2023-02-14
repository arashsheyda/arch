<template>
  <ul>
    <li v-if="next?._path.includes('blog')">
      <NuxtLink :to="next._path">
        next: {{ next.title }}
      </NuxtLink>
    </li>
    <li v-if="prev">
      <NuxtLink :to="prev._path">
        prev: {{ prev.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
defineProps({
  prev: {
    type: Object,
    default: null
  },
  next: {
    type: Object,
    default: null
  }
})
</script>

<style lang="scss">

</style>
