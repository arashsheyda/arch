<script lang="ts" setup>
defineProps({
  link: {
    type: Object,
    required: true,
  },
  i: {
    type: Number,
    default: 0,
    required: false,
  },
})
</script>

<template>
  <li flex="~ gap-1" w-full text="base" hover="text-primary" my1 :style="{ marginLeft: `${i * 12}px` }">
    <span v-if="i">
      -
    </span>
    <NuxtLink
      :to="`#${link.id}`"
      flex="~ gap-1 items-center"
      class="icon-xs"
      :class="[`link-item h-${link.depth}`, { active: $route.hash === `#${link.id}` }]"
    >
      <Icon v-if="link.icon" :name="link.icon.name" />
      {{ link.text }}
    </NuxtLink>
  </li>
  <ArchPostTocItem v-for="child in link.children" :key="child.id" :link="child" :i="i + 1" />
</template>
