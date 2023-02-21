<script lang="ts" setup>
const arch = useArch()
</script>

<template>
  <ul class="socials">
    <li v-for="social in arch.socials" :key="social.icon" class="social-item">
      <a :href="social.url" :title="social.name" :target="social?.target" :rel="social?.target === '_blank' ? 'noopener noreferrer' : ''" :class="social.icon.split(':')[1]">
        <Icon :name="social.icon" />
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

  li {
    margin: 0 5px;
  }
}
</style>
