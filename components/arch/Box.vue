<script lang="ts" setup>
import type { nSizes } from '~/types/sizes'

const props = defineProps({
  title: {
    type: String,
    default: null,
    required: false,
  },
  icon: {
    type: String,
    default: null,
    required: false,
  },
  bg: {
    type: String as PropType<'white' | 'gray' | 'blue' | 'red' | 'yellow' | 'green' | 'indigo' | 'purple' | 'pink'>,
    default: 'white',
  },
  size: {
    type: [Number] as PropType<nSizes>,
    default: 12,
  },
  rounded: {
    type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' | 'none'>,
    default: 'lg',
  },
  shadow: {
    type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'inner' | 'none'>,
    default: 'lg',
  },
  minimize: {
    type: Boolean,
    default: null,
    required: false,
  },
  hideable: {
    type: Boolean,
    default: false,
    required: false,
  },
  divider: {
    type: Boolean,
    default: true,
    required: false,
  },
  component: {
    type: String as PropType<'div' | 'section' | 'article' | 'aside' | 'nav' | 'header' | 'footer' | 'main'>,
    default: 'div',
    required: false,
  },
  sticky: {
    type: Boolean,
    default: false,
    required: false,
  },
})

const emit = defineEmits(['minimize'])
const minimizeIt = () => emit('minimize')
const hide = ref(false)

const colspan = {
  md: {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
    4: 'md:col-span-4',
    5: 'md:col-span-5',
    6: 'md:col-span-6',
    7: 'md:col-span-7',
    8: 'md:col-span-8',
    9: 'md:col-span-9',
    10: 'md:col-span-10',
    11: 'md:col-span-11',
    12: 'md:col-span-12',
  },
}

const calculateRounded = computed(() => {
  if (props.rounded === 'none')
    return ''

  return `rounded-${props.rounded}`
})

const calculateBg = computed(() => {
  return `bg-${props.bg}`
})

const calculateShadow = computed(() => {
  if (props.shadow === 'none')
    return ''

  return `shadow-${props.shadow}`
})
</script>

<template>
  <component :is="component" :class="[colspan.md[size], calculateRounded, calculateBg, calculateShadow]" class="relative col-span-12 dark:bg-dark">
    <template v-if="title">
      <div :class="{ 'mb-2': !hide }" class="flex text-slate-500">
        <Icon :name="icon" class="mr-2" />
        <p>{{ title }}</p>
      </div>
      <hr v-if="!hide && divider" class="mb-2">
    </template>
    <div :class="{ hidden: hide }">
      <slot />
    </div>
    <button v-if="minimize !== null" class="absolute right-4 top-4 text-slate-500" aria-label="Minimize" @click="minimizeIt">
      <Icon v-if="minimize" name="uil:circle" />
      <Icon v-else name="uil:compact-disc" />
    </button>
    <button v-if="hideable" class="absolute right-4 top-4 text-slate-500" aria-label="Minimize" @click="hide = !hide">
      <Icon v-if="hide" name="tabler:minimize" />
      <Icon v-else name="tabler:arrows-diagonal-minimize-2" />
    </button>
  </component>
</template>
