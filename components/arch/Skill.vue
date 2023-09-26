<script setup lang="ts">
interface Skill {
  title: string
  color: string
  hover?: string
}

defineProps<{
  items: Skill[]
}>()
</script>

<template>
  <div flex="~ wrap gap-2 justify-center" border="~ base" py6 px3 m2 rounded-lg text-sm font-500>
    <div
      v-for="item, index of items"
      :key="index"
      class="skill-item bg-gray/5"
      px4 py2 rounded-full
      :style="{ '--skill-hover': `#${item.hover ? item.hover : item.color}`, '--skill-color': `#${item.color}` }"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<style>
.skill-item {
	 color: var(--skill-color);
	 text-shadow: 0px 0px 7px var(--skill-color);
	 transition: all 0.3s ease;
}
.skill-item:hover {
	cursor: pointer;
	color: #fff;
text-shadow: 0px 0px 7px var(--skill-color);
	background: var(--skill-hover);
	box-shadow: 0 0 13px var(--skill-hover);
}
</style>
