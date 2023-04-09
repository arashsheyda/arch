<script lang="ts" setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
  zoom: {
    type: Number,
    required: false,
    default: 10,
  },
  height: {
    type: String,
    required: false,
    default: '400px',
  },
  grayscale: {
    type: Boolean,
    required: false,
    default: true,
  },
})
</script>

<template>
  <div class="px-4">
    <iframe
      class="h-96 w-full rounded-lg bg-gray-200"
      title="Map"
      :class="{ grayscale }"
      :src="url"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
</template>
