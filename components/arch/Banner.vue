<template>
  <div class="header-image">
    <ProseImg v-if="arch.banner.image" :src="arch.banner.image" :alt="`${arch.info.name} Banner`" />
  </div>
</template>

<script lang="ts" setup>
const arch = useArch()
</script>

<style lang="scss">
.header-image {
  height: 19.3rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
