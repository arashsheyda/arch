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
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
  5: 'sm:grid-cols-5',
  6: 'sm:grid-cols-6',
  7: 'sm:grid-cols-7',
  8: 'sm:grid-cols-8',
  9: 'sm:grid-cols-9',
  10: 'sm:grid-cols-10',
  11: 'sm:grid-cols-11',
  12: 'sm:grid-cols-12',
}
</script>

<template>
  <div class="relative px-5" :class="{ 'py-5': padding }">
    <component :is="`h${heading}`" :class="[headingSize, { 'section-header': line }, bold ? 'font-bold' : 'font-medium', { 'ml-8 ': collapsable }]" class="relative mb-4 text-slate-700">
      <Icon v-if="icon && iconRight" :name="icon" class="h-8 w-8 ml-2 mb-1 mr-2" :class="`text-${iconColor}`" />
      <span>
        {{ title }}
      </span>
      <Icon v-if="icon && !iconRight" :name="icon" class="h-8 w-8 ml-2 mb-1" />
    </component>

    <component :is="timeline ? 'ol' : 'div'" :class="[timeline ? 'relative border-l border-gray-200 dark:border-gray-700 ml-4' : flex ? 'text-center' : `grid gap-5 ${list ? 'grid-cols-1' : gridSize[cols]} mt-8`, { 'hidden ': minimized }, { 'arch-list': list }, background]">
      <template v-if="fetch">
        <component :is="fetch?.component" v-for="item in fetchData?.data.value" :key="item._id" :item="item" />
      </template>
      <template v-else>
        <slot />
      </template>
    </component>

    <button v-if="collapsable" aria-label="Hide" class="absolute top-[25px] left-7" @click="minimized = !minimized">
      <Icon v-if="minimized" name="uil:circle" />
      <Icon v-else name="uil:compact-disc" />
    </button>

    <button v-if="listable" aria-label="List" class="absolute top-5 right-5 bg-gray-200 p-2 rounded-lg" @click="list = !list">
      <Icon v-if="list" name="tabler:layout-grid" />
      <Icon v-else name="tabler:list" />
    </button>
  </div>
</template>

<style>
.section-header:before {
  @apply bg-[#00cfff] -bottom-2 left-0 content-[""] h-[5px] absolute w-[3.125rem] z-[1] rounded-lg;
}

.section-header:after {
  @apply bg-[#015eea] -bottom-2 left-0 content-[""] h-[5px] absolute w-4 z-[1] rounded-lg;
}
</style>
