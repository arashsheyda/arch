<script lang="ts" setup>
import { NuxtLink } from '#components'

defineProps<{
  icon?: string
  image?: string
  title?: string
  description?: string
  // eslint-disable-next-line vue/prop-name-casing
  _path?: string
}>()
</script>

<template>
  <component :is="_path ? NuxtLink : 'div'" :to="_path" class="group px.6 py.5 bg-animate bg-gray/20 rounded-2xl text-center transition-all">
    <div class="w-full h-full p-8 rounded-2xl bg-gray-100 dark:bg-darker">
      <div class="flex justify-center mb-2">
        <Icon v-if="icon" :name="icon" h-10 w-10 />
        <ProseImg v-if="image" :height="50" :width="50" :src="image" :alt="title" />
      </div>
      <div>
        <h3 class="text-lg font-bold text-slate-700 dark:text-white mb-2">
          {{ title }}
        </h3>
        <p class="text-slate-700 dark:text-white mb-2">
          {{ description }}
        </p>
      </div>
    </div>
  </component>
</template>

<style>
.bg-animate:hover {
  background: linear-gradient(277deg, #fd004c, #fe9000, #fff020, #3edf4b, #3363ff, #b102b7, #fd004c);
  background-size: 300%;
  animation: AnimateBackground 2s ease-out infinite;
}

@keyframes AnimateBackground {
  0% {
    background-position: 0;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 0;
  }
}
</style>
