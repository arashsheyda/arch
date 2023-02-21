<script lang="ts" setup>
import type { Variants } from '~eos/types/variants'
import type { Sizes } from '~eos/types/sizes'

const props = defineProps({
  variant: {
    type: String as PropType<Variants>,
    default: 'gradient',
    required: false,
  },
  size: {
    type: String as PropType<Sizes>,
    default: 'md',
    required: false,
  },
  type: {
    type: String,
    default: 'button',
    required: false,
  },
  to: {
    type: String,
    default: null,
    required: false,
  },
})

const component = computed(() => {
  if (props.to)
    return 'router-link'

  return 'button'
})
</script>

<template>
  <component :is="component" :to="to" :type="type" class="btn" :class="[`btn-${size}`, `btn-${variant}`]">
    <slot />
  </component>
</template>

<style lang="scss">

</style>
