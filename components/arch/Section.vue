<script lang="ts" setup>
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


interface fetchProp {
  key: string
  path: string
  component: string
}

const props = withDefaults(defineProps<{
  cols?: number
  flex?: boolean
  padding?: boolean
  fetch?: fetchProp
  centered?: boolean
  background?: string
  items?: []
  is?: string
} & HeadingProp>(), {
  cols: 2,
  flex: false,
  padding: false,
  fetch: undefined,
  centered: false,
  items: () => [],
  // heading prop
  iconStart: false,
  iconColor: 'white',
  h: 3,
  line: false,
  bold: true,
  collapsable: false,
  listable: false,
})

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
} as any
</script>

<template>
  <ArchHeading v-slot="{ minimized, list }" v-bind="props">
    <div
      class="mb-8"
      :class="[
        flex ? 'text-center' : `grid gap-5 ${list && listable ? 'grid-cols-1' : gridSize[cols]}`,
        { 'hidden ': minimized },
        { list },
        { 'p-4': padding },
        background,
      ]"
    >
      <template v-if="items.length && is">
        <component :is="is" v-for="item, index in items" :key="index" v-bind="item" />
      </template>
      <template v-if="fetch">
        <component :is="fetch?.component" v-for="item in fetchData?.data.value" :key="item._id" :item="item" />
      </template>
      <template v-else>
        <slot />
      </template>
    </div>
  </ArchHeading>
</template>

<style>
.section-header:before {
  @apply bg-primary bottom--2 left-0 content-[""] h1 absolute w-16 rounded-lg;
}

.section-header:after {
  @apply bg-secondary bottom--2 left-0 content-[""] h1 absolute w-4 rounded-lg;
}
</style>
