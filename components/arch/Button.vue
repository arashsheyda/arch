<script lang="ts" setup>
import type { Variants } from '~arch/types/variants'
import type { Sizes } from '~arch/types/sizes'
import NuxtLink from '#app/components/nuxt-link'

const props = defineProps({
  variant: {
    type: String as PropType<Variants>,
    default: 'primary',
    required: false,
  },
  textColor: {
    type: String as PropType<Variants>,
    default: 'white',
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
  rounded: {
    type: String as PropType<'sm' | 'md' | 'lg' | 'full'>,
    default: 'lg',
    required: false,
  },
  shadow: {
    type: String as PropType<'sm' | 'md' | 'lg' | 'xl'>,
    default: 'lg',
    required: false,
  },
  label: {
    type: String,
    default: null,
    required: false,
  },
})

const component = computed(() => {
  if (props.to)
    return NuxtLink

  return 'button'
})

const textColor = computed(() => {
  const colorMap = {
    white: 'text-white',
    black: 'text-black',
  }
  return colorMap[props.textColor]
})

const buttonSize = computed(() => {
  const sizeMap = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-5 py-3 text-base',
    xl: 'px-6 py-3.5 text-base',
  }
  if (props.rounded) {
    sizeMap.xs = 'px-2 py-2 text-xs'
    sizeMap.sm = 'px-2.5 py-2.5 text-sm'
    sizeMap.md = 'px-3 py-3 h-12 w-12 text-base'
    sizeMap.lg = 'px-4 py-4 text-base'
    sizeMap.xl = 'px-5 py-5 text-base'
  }
  return sizeMap[props.size]
})

const shadowSize = computed(() => {
  const sizeMap = {
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  }
  return sizeMap[props.shadow]
})
</script>

<template>
  <!-- dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 -->
  <!-- bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  -->
  <!-- px-5 py-2.5 -->
  <component
    :is="component"
    :to="to"
    :type="type"
    :aria-label="label"
    :class="[`bg-${variant}`, `rounded-${rounded}`, buttonSize, textColor, shadowSize]"
  >
    <slot />
  </component>
</template>
