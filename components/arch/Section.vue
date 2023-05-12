<script lang="ts" setup>
interface fetchProp {
  key: string
  path: string
  component: string
}

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  heading: {
    type: Number as PropType<1 | 2 | 3 | 4 | 5 | 6>,
    default: 2,
    required: false,
  },
  bold: {
    type: Boolean,
    default: true,
  },
  icon: {
    type: String,
    default: null,
    required: false,
  },
  iconColor: {
    type: String,
    default: 'slate-700',
    required: false,
  },
  iconRight: {
    type: Boolean,
    default: false,
  },
  line: {
    type: Boolean,
    default: true,
  },
  cols: {
    type: Number as PropType<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>,
    default: 2,
    required: false,
  },
  timeline: {
    type: Boolean,
    default: false,
  },
  flex: {
    type: Boolean,
    default: false,
  },
  padding: {
    type: Boolean,
    default: true,
  },
  collapsable: {
    type: Boolean,
    default: false,
  },
  fetch: {
    type: Object as PropType<fetchProp>,
    default: null,
  },
  centered: {
    type: Boolean,
    default: false,
  },
  listable: {
    type: Boolean,
    default: false,
  },
  background: {
    type: String,
    default: null,
  },
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

  return sizeMap[props.heading]
})

const minimized = ref<boolean>(false)
const list = ref<boolean>(false)

const fetchData = props.fetch ? await useAsyncData(props.fetch!.key, () => queryContent(props.fetch!.path).sort({ date: -1 }).where({ published: true }).find()) : null

const gridSize = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
  7: 'md:grid-cols-7',
  8: 'md:grid-cols-8',
  9: 'md:grid-cols-9',
  10: 'md:grid-cols-10',
  11: 'md:grid-cols-11',
  12: 'md:grid-cols-12',
}
</script>

<template>
  <div relative text-base :class="{ py4: padding }">
    <component :is="`h${heading}`" :class="[headingSize, { 'section-header': line }, bold ? 'font-bold' : 'font-medium', { 'ml8 ': collapsable }]" relative mb4 text-slate-700 dark:text-white>
      <Icon v-if="icon && iconRight" :name="icon" h-8 w-8 ml2 mb1 mr2 :class="`text-${iconColor}`" />
      <span>
        {{ title }}
      </span>
      <Icon v-if="icon && !iconRight" :name="icon" h-8 w-8 ml2 mb1 />
    </component>

    <component :is="timeline ? 'ol' : 'div'" :class="[timeline ? 'relative border-l border-gray-200 dark:border-gray-700 ml4' : flex ? 'text-center' : `grid gap-5 ${list ? 'grid-cols-1' : gridSize[cols]} mt8`, { 'hidden ': minimized }, { 'arch-list': list }, background]">
      <template v-if="fetch">
        <component :is="fetch?.component" v-for="item in fetchData?.data.value" :key="item._id" :item="item" />
      </template>
      <template v-else>
        <slot />
      </template>
    </component>

    <button v-if="collapsable" aria-label="Hide" absolute top-5 left-2 text-base @click="minimized = !minimized">
      <Icon v-if="minimized" name="uil:circle" />
      <Icon v-else name="uil:compact-disc" />
    </button>

    <button v-if="listable" aria-label="List" absolute top-2 right-0 bg-base-dark text-base p2 rounded-lg @click="list = !list">
      <Icon v-if="list" name="tabler:layout-grid" />
      <Icon v-else name="tabler:list" />
    </button>
  </div>
</template>

<style>
.section-header:before {
  @apply bg-primary bottom--2 left-0 content-[""] h1 absolute w-16 rounded-lg;
}

.section-header:after {
  @apply bg-secondary bottom--2 left-0 content-[""] h1 absolute w-4 rounded-lg;
}
</style>
