<script lang="ts" setup>
const arch = useArch()
</script>

<template>
  <div class="grid grid-cols-4 text-center gap-y-5">
    <NuxtLink
      v-for="item in arch.socials"
      :key="item.url"
      class="social-item col-span-1"
      :to="item.url"
      :rel="item?.target === '_blank' ? 'noopener noreferrer' : ''"
      :target="item.target"
      :title="item.title"
    >
      <Icon :name="item.icon" :class="item.title" :style="{ '--arch-social-hover': item.color }" />
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.social-item {
  &:hover {
    svg {
      color: var(--arch-social-hover);
      filter: drop-shadow(0 0 0.75rem var(--arch-social-hover));
    }
  }
}
</style>
