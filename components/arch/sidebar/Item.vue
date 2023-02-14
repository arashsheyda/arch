<template>
  <li class="details-info-item-wrapper">
    <component :is="link ? 'a' : 'div'" :href="link" :title="title" class="details-info-item">
      <span class="icon-box">
        <Icon :name="icon" />
      </span>
      <div class="contacts-block-detail">
        <span class="overhead">{{ title }}</span>
        {{ value }}
      </div>
    </component>
  </li>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false,
    default: null
  }
})
</script>

<style lang="scss">

</style>
