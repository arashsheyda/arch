<template>
  <component :is="component" :to="to" :type="type" class="btn" :class="[`btn-${size}`, `btn-${variant}`]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { Variants } from '../../types/variants'
import { Sizes } from '../../types/sizes'

const props = defineProps({
  variant: {
    type: String as PropType<Variants>,
    default: 'gradient',
    required: false
  },
  size: {
    type: String as PropType<Sizes>,
    default: 'md',
    required: false
  },
  type: {
    type: String,
    default: 'button',
    required: false
  },
  to: {
    type: String,
    default: null,
    required: false
  }
})

const component = computed(() => {
  if (props.to) {
    return 'router-link'
  }
  return 'button'
})
</script>

<style lang="scss">

</style>
