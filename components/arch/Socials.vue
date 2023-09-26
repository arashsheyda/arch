<script lang="ts" setup>
const arch = useArch()
</script>

<template>
  <div grid="~ cols-4" text="base center" gap-y-5 justify-center>
    <NuxtLink
      v-for="item in arch.socials"
      :key="item.url"
      col-span-1
      class="social-item"
      :to="item.url"
      :rel="item?.target === '_blank' ? 'noopener noreferrer' : ''"
      :target="item.target"
      :title="item.title"
    >
      <Icon :name="item.icon" :class="item.title" transition-all :style="{ '--arch-social-hover': item.color }" />
    </NuxtLink>
  </div>
</template>

<style>
.social-item:hover svg {
  color: var(--arch-social-hover);
  filter: drop-shadow(0 0 0.75rem var(--arch-social-hover));
}
</style>
