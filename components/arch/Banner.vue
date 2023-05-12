<script lang="ts" setup>
const arch = useArch()
</script>

<template>
  <ProseImg class="w-full h-full object-cover" :src="arch.banner!.image" :alt="arch.banner?.alt" :rounded="false" :lazy="false" />
</template>
