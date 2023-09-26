<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

withDefaults(defineProps<{
  name: string
  images?: string | string[]
  navigation?: boolean
  zoomable?: boolean
}>(), {
  images: () => [],
  navigation: true,
  zoomable: true,
})
</script>

<template>
  <ClientOnly v-if="Array.isArray(images) && images.length > 1">
    <Carousel :items-to-show="1" :wrap-around="true">
      <Slide v-for="image, index in images" :key="`arch-slider-${index}`">
        <ProseImg :src="image" :alt="name" :zoomable="zoomable" />
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <template #placeholder>
      <ProseImg :src="images[0]" :alt="name" :zoomable="zoomable" />
    </template>
  </ClientOnly>
  <ProseImg v-else :src="Array.isArray(images) ? images[0] : images" :alt="name" :zoomable="zoomable" />
</template>
