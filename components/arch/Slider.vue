<template>
  <template v-if="Array.isArray(images) && images.length > 1">
    <ClientOnly>
      <carousel :items-to-show="1" :wrap-around="true">
        <slide v-for="image, index in images" :key="`arch-slider-${index}`">
          <ProseImg :src="image" :alt="name" :zoomable="zoomable" />
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
      <template #placeholder>
        <ProseImg :src="images[0]" :alt="name" :zoomable="zoomable" />
      </template>
    </ClientOnly>
  </template>
  <ProseImg v-else :src="Array.isArray(images) ? images[0] : images" :alt="name" :zoomable="zoomable" />
</template>

<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

defineProps({
  name: {
    type: String,
    required: true
  },
  images: {
    type: [String, Array],
    required: true
  },
  navigation: {
    type: Boolean,
    required: false,
    default: true
  },
  zoomable: {
    type: Boolean,
    required: false,
    default: true
  }
})
</script>

<style lang="scss">
.carousel__viewport {
  border-radius: var(--border-radius);

  .carousel__track {
    .carousel__slide {
      padding: 0px 10px;
    }
  }
}

.carousel__prev,
.carousel__next,
.carousel__pagination {
  transition: all 0.2s ease;
}

.carousel__prev,
.carousel__next {
  color: #fff;
  transition: all 0.2s ease;

  svg {
    filter: drop-shadow(0 0 7px var(--color-primary));
  }

  &:hover {
    color: var(--color-primary);
    opacity: 1;
  }
}

.carousel__pagination {
  position: absolute;
  z-index: 999;
  bottom: 30px;
  padding: 0;
  margin: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease;

  .carousel__pagination-item {
    .carousel__pagination-button {
      &.carousel__pagination-button--active {
        &::after {
          background-color: var(--color-primary);
        }
      }

      &::after {
        background-color: var(--box-shadow);
      }
    }
  }
}
</style>
