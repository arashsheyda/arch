<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Headlines } from '../../types/headlines'

defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: null,
    required: false,
  },
  h: {
    type: Number as PropType<Headlines>,
    default: 1,
    required: false,
  },
  underline: {
    type: Boolean,
    default: true,
    required: false,
  },
})
</script>

<template>
  <div class="breadcrumb">
    <component :is="`h${h}`" class="title" :class="[{ title__separate: underline }, `title--h${h}`]">
      {{ title }}
      <Icon v-if="icon" :name="icon" />
    </component>
    <slot />
  </div>
</template>

<style lang="scss">
.breadcrumb {
  svg {
    width: 2rem;
    height: 2rem;
    margin-bottom: 0.5rem;
  }

  .title__separate {
    margin-bottom: 2.3125rem;
    position: relative;
  }

  .title__separate::before,
  .title__separate::after {
    content: '';
    background-color: var(--color-primary);
    border-radius: 0.5rem;
    height: 5px;
    position: absolute;
    bottom: -1.125rem;
    left: 0;
    width: 3.125rem;
    z-index: 1;
  }

  .title__separate::after {
    background-color: var(--color-secondary);
    width: 1rem;
  }

  @media only screen and (max-width: 580px) {
    .title__separate {
      margin-bottom: 1.5625rem;
    }

    .title__separate::before,
    .title__separate::after {
      height: 0.1875rem;
      bottom: -0.625rem;
    }

    .title__separate::before {
      width: 3rem;
    }

    .title__separate::after {
      width: 1rem;
    }
  }

}
</style>
