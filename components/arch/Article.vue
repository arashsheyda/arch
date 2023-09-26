<script lang="ts" setup>
import { formatDate } from '~arch/utils/formatting'

defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="group" hover="border-1 border-primary" max-w-sm bg-body rounded-lg shadow-base transition-all>
    <NuxtLink class="thumbnail min-h-10" relative block :to="item._path">
      <div absolute top-.5 left-.5 p2 bg-primary rounded-tl-lg rounded-br-lg text-white>
        {{ formatDate(item.date) }}
      </div>
      <Icon
        absolute op-0 group-hover="op-100" transition-all duration-700
        class="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" z-9 w-13 h-13 text-white
        name="lucide:newspaper"
      />
      <div class="backdrop" absolute bg-black bg-op-0 transition duration-300 inset-0 group-hover="backdrop-blur-3 bg-op-50" border="lighter dark:darker" />
      <ProseImg :rounded="false" rounded-t-lg h-full min-h-55 max-h-55 w-full object-cover :src="item.image" :alt="item.title" />
    </NuxtLink>
    <div p5>
      <NuxtLink :to="item._path">
        <h5 mb2 text-2xl font-bold tracking-tight text-base transition-all group-hover:text-primary>
          {{ item.title }}
        </h5>
      </NuxtLink>
      <p mb3 font-normal text-base-light>
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<style>
@media (min-width: 650px) {
  .list > div {
    @apply flex max-w-full
  }

  .list > div .thumbnail {
    @apply max-w-1/3 min-w-1/3
  }

  .backdrop {
    @apply rounded-t-lg border-r-2 border-l-2 border-t-2
  }

  .list > div .backdrop {
    @apply rounded-tl-lg rounded-bl-lg rounded-tr-none border-b-2 border-l-2 border-t-2 border-r-none
  }

  .list > div .thumbnail img {
    @apply rounded-tl-lg rounded-bl-lg rounded-tr-none
  }
}
</style>
