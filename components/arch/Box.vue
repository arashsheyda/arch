<script lang="ts" setup>
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
  hidable: {
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
})

const emit = defineEmits(['minimize'])
const minimizeIt = () => emit('minimize')
const hide = ref(false)

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
  <component :is="component" relative col-span-12 bg-base :class="[calculateRounded, calculateBg, calculateShadow]">
    <template v-if="title">
      <div :class="{ mb2: !hide }" flex text-base-light>
        <Icon :name="icon" mr2 />
        <p>{{ title }}</p>
      </div>
      <div v-if="!hide && divider" a-divider />
    </template>
    <div :class="{ hidden: hide }">
      <slot />
    </div>
    <button v-if="minimize !== null" absolute right-4 top-4 text-base-light aria-label="Minimize" @click="minimizeIt">
      <Icon v-if="minimize" name="uil:circle" />
      <Icon v-else name="uil:compact-disc" />
    </button>
    <button v-if="hidable" absolute right-4 top-4 text-base-light aria-label="Minimize" @click="hide = !hide">
      <Icon v-if="hide" name="tabler:minimize" />
      <Icon v-else name="tabler:arrows-diagonal-minimize-2" />
    </button>
  </component>
</template>
