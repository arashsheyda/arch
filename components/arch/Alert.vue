<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: 'info',
  },
})

const alertTypes = {
  info: 'alert-cyan',
  warning: 'alert-yellow',
  danger: 'alert-red',
  success: 'alert-green',
} as any

const alertType = computed(() => {
  return alertTypes[props.type] || 'alert-cyan'
})
</script>

<template>
  <div :class="alertType" mb-2>
    <slot />
  </div>
</template>
