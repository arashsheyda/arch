<script lang="ts" setup>
const arch = useArch()
</script>

<template>
  <ul class="socials">
    <li v-for="social in arch.socials" :key="social.icon" class="social-item">
      <a :href="social.url" :title="social.name" :target="social?.target" :rel="social?.target === '_blank' ? 'noopener noreferrer' : ''" :class="social.icon.split(':')[1]">
        <Icon :name="social.icon" :style="{ '--social-hover': social.color }" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss">
.socials {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  justify-content: center;

  .social-item {
    margin: 0 5px;
    svg {
      color: var(--color-dark);
      transition: all 0.2s ease;
      &:hover {
        color: var(--social-hover);
        filter: drop-shadow(0 0 0.75rem var(--social-hover));
      }
    }
  }
}
</style>
