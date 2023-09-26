<script setup lang="ts">
import { NuxtLink } from '#components'

interface TimelineItem {
  title: any
  icon: string
  company: any
  description: string
  date: string
  location: string
}

defineProps<{
  title: string
  icon?: string | object
  items?: TimelineItem[]
}>()
</script>

<template>
  <ArchHeading v-slot="{ minimized }" :title="title" :icon="icon">
    <ol v-show="!minimized" ml8>
      <li
        v-for="item, index in items"
        :key="`${index}-${item.company?.text ?? item.company}`"
        class="timeline-item w-md" text-xs
      >
        <h3 text-base text-lg font-bold mt2 line-height-none>
          <Icon v-if="item.icon" :name="item.icon" :class="{ 'rotate-180 filter-saturate-500': item.title === 'Persian' }" mt--1 mr1 />
          {{ item.title }}
          <br>
        </h3>
        <div class="icon-xs text-base-light" flex="~ col gap-2" mt-4>
          <component
            :is="typeof item.company?.link === 'string' ? NuxtLink : 'p'"
            v-if="item.company" :href="item.company?.link"
            :class="[{ 'prose-a': typeof item.company?.link === 'string' }]"
            target="_blank" flex="~ gap-1 items-center"
          >
            <Icon name="carbon:building" />
            {{ typeof item.company?.text === 'string' ? item.company?.text : item.company }}
          </component>
          <p v-if="item.date" flex="~ gap-1 items-center">
            <Icon name="carbon:calendar" />
            {{ item.date }}
          </p>
          <p v-if="item.location" flex="~ gap-1 items-center">
            <Icon name="carbon:location" />
            {{ item.location }}
          </p>
          <p v-if="item.description">
            <span ml2>
              -
            </span>
            {{ item.description }}
          </p>
        </div>
      </li>
    </ol>
  </ArchHeading>
</template>

<style>
.timeline-item {
  @apply relative w-full;
  padding-left: 1.5rem;
  padding-bottom: 1rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -0.3125rem;
  height: 0.625rem;
  width: 0.625rem;
  border-radius: 50%;
  @apply bg-primary;
  box-shadow: 0 0 0 0.17rem #00c7c750;
  z-index: 1;
}

.timeline-item::after {
  content: '';
  position: absolute;
  top: 0.625rem;
  left: -1px;
  width: 0.0625rem;
  height: calc(100%);
  @apply bg-dark/10 dark-bg-gray/30;
}

.timeline-item:last-child::after {
  height: calc(100% - 1.5rem);
}
</style>
