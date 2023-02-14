<template>
  <div class="scroll-to-top" @click="scrollToTop">
    <Icon name="tabler:chevron-up" />
  </div>
</template>

<script lang="ts" setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style lang="scss">
.scroll-to-top {
  z-index: 999;
  position: fixed;
  right: 30px;
  bottom: 30px;
  color: var(--color-dark);
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  text-align: center;
  line-height: 2.4rem;
  border-radius: 50%;
  background: var(--color-light);
  box-shadow: 0px 0px 13px 0px var(--box-shadow);
  transition: all 0.3s ease;

  &:hover {
    color: var(--color-primary);
    box-shadow: 0px 0px 13px var(--box-shadow);
    transition: all 0.3s ease;
  }
}
</style>
