<script setup lang="ts">
interface HeadingProp {
  title?: string
  h?: 1 | 2 | 3 | 4 | 5 | 6
  icon?: string | IconObject
  iconStart?: boolean
  iconColor?: string
  line?: boolean
  bold?: boolean
  collapsable?: boolean
  listable?: boolean
}

interface IconObject {
  name?: string
  color?: string
  start?: boolean
}


const props = withDefaults(defineProps<HeadingProp>(), {
  iconStart: false,
  iconColor: 'white',
  h: 3,
  line: false,
  bold: true,
  collapsable: false,
  listable: false,
})

const headingSize = computed(() => {
  const sizeMap = {
    1: 'text-5xl',
    2: 'text-4xl',
    3: 'text-3xl',
    4: 'text-2xl',
    5: 'text-xl',
    6: 'text-lg',
  }

  return sizeMap[props.h]
})

const minimized = ref(false)
const list = ref(false)

const tIcon = computed(() => {
  const { icon, iconColor, iconStart } = props
  return typeof icon === 'object'
    ? { name: icon?.name || '', color: icon?.color || 'white', start: icon?.start || false }
    : { name: icon || '', color: iconColor || '', start: iconStart || false }
})
</script>

<template>
  <div :id="title?.toLowerCase()" relative>
    <component
      :is="`h${h}`"
      v-if="title"
      class="relative text-slate-700 dark:text-white"
      :class="[headingSize, { 'section-header mb4': line }, bold ? 'font-bold' : 'font-medium', { 'ml-4': collapsable }]"
    >
      <Icon v-if="tIcon.start" :name="tIcon.name" h-8 w-8 mb1 mr2 :class="tIcon.color" />
      <span>
        {{ title }}
      </span>
      <Icon v-if="!tIcon.start" :name="tIcon.name" h-8 w-8 mb1 ml1 :class="tIcon.color" />
    </component>
    <slot :minimized="minimized" :list="list" />

    <button
      v-if="collapsable"
      :title="`${!minimized ? 'Minimize' : 'Maximize'} Section`"
      :aria-label="`${!minimized ? 'Minimize' : 'Maximize'} Section`"
      absolute top-2 left--3 text-base
      @click="minimized = !minimized"
    >
      <Icon v-if="minimized" name="uil:circle" h-4.5 w-4.5 />
      <Icon v-else name="uil:compact-disc" h-4.5 w-4.5 />
    </button>

    <button v-if="listable" aria-label="List" absolute top--1 right-0 bg-body text-base p2 rounded-lg @click="list = !list">
      <Icon v-if="list" name="tabler:layout-grid" />
      <Icon v-else name="tabler:list" />
    </button>
  </div>
</template>
