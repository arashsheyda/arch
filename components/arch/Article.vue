<script lang="ts" setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="group" max-w-sm bg-body rounded-lg shadow-base transition-all>
    <NuxtLink :to="item._path">
      <ProseImg :rounded="false" rounded-t-lg :src="item.image" :alt="item.title" />
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
