<template>
  <NuxtImg
    :class="{'zoomable': zoomable}"
    :src="refinedSrc"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="loadingType"
    :provider="provider == '/public' || provider == '/' ? '' : provider"
    :quality="100"
  />
</template>

<script lang="ts" setup>
import { withBase } from 'ufo'

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  lazy: {
    type: Boolean,
    default: true
  },
  height: {
    type: [String, Number],
    default: undefined
  },
  zoomable: {
    type: Boolean,
    default: false
  }
})

const arch = useArch()

const loadingType = computed(() => {
  return (props.lazy === true) ? 'lazy' : 'eager'
})

const provider = computed(() => `/${props.src.split('/')[1]}`)

const refinedSrc = computed(() => {
  if (provider.value === '/') {
    return props.src
  }
  const src = props.src.replace(provider.value, '')
  return provider.value === '/public' ? withBase(src, arch.value.baseUrl) : src
})
</script>

<style lang="scss">

</style>
