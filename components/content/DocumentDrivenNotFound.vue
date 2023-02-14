<template>
  <ArchError code="404" title="Page not found" message="This is not the page you're looking for." />
</template>

<script lang="ts" setup>
useHead({
  title: '404 - Page not found',
  meta: [
    {
      name: 'description',
      content: 'This is not the page you are looking for.'
    }
  ]
})
</script>

<style lang="scss">

</style>
