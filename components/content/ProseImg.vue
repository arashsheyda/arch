<script lang="ts" setup>
// import { withBase } from 'ufo'

const props = withDefaults(defineProps<{
  src: string
  alt?: string
  width?: number
  height?: number
  lazy?: boolean
  zoomable?: boolean
  rounded?: boolean
}>(), {
  lazy: true,
  rounded: true,
})

const isImage = computed(() => props.src.startsWith('/') || props.src.startsWith('http'))

const loadingType = computed(() => {
  return (props.lazy === true) ? 'lazy' : 'eager'
})

// const provider = computed(() => `/${props.src.split('/')[1]}`)

// const refinedSrc = computed(() => {
//   if (provider.value === '/')
//     return props.src

//   const src = props.src.replace(provider.value, '')
//   return provider.value === '/public' ? withBase(src, arch.value.baseUrl) : src
// })
</script>

<template>
  <img
    v-if="isImage"
    :class="[{ 'rounded-lg': rounded }, { zoomable }]"
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="loadingType"
  >
  <Icon v-else :name="src" />
</template>
