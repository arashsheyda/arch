<template>
  <iframe
    class="map"
    title="Map"
    :class="{'grayscale': grayscale}"
    :src="url"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  />
</template>

<script lang="ts" setup>
defineProps({
  url: {
    type: String,
    required: true
  },
  zoom: {
    type: Number,
    required: false,
    default: 10
  },
  height: {
    type: String,
    required: false,
    default: '400px'
  },
  grayscale: {
    type: Boolean,
    required: false,
    default: true
  }
})
</script>

<style lang="scss">
.map {
  height: 23rem;
  margin-bottom: 2rem;
  background-color: #F7F9FA;
  border-radius: var(--border-radius);
  &.grayscale {
    filter: grayscale(100%);
  }
}

@media only screen and (max-width: 580px) {
  .map {
    height: 15rem;
  }
}
</style>
