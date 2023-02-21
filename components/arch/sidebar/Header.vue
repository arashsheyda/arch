<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    default: 'Arch',
  },
  job: {
    type: String,
    default: 'Software Engineer',
  },
  image: {
    type: String,
    required: true,
  },
  hoverImage: {
    type: String,
    default: null,
    required: false,
  },
})
</script>

<template>
  <div class="sidebar-info-header">
    <figure class="avatar-box">
      <ProseImg v-if="image" :src="image" :alt="name" />
      <ProseImg v-if="hoverImage" class="overly" :src="hoverImage" :alt="`${name} overly`" />
    </figure>
    <div class="text-xl-center">
      <h3 class="title title--h3 sidebar-name">
        {{ name }}
      </h3>
      <div class="badge">
        <span>{{ job }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
