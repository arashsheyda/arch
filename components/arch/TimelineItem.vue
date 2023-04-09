<script lang="ts" setup>
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
  name: {
    type: String,
    default: null,
    required: false,
  },
  date: {
    type: String,
    default: null,
    required: false,
  },
  description: {
    type: String,
    default: null,
    required: false,
  },
  location: {
    type: String,
    default: null,
    required: false,
  },
  link: {
    type: String,
    default: null,
    required: false,
  },
})
</script>

<template>
  <li class="m-4">
    <div class="absolute w-4 h-4 bg-primary rounded-full -left-2 border-2 border-gray-200 dark:border-gray-900 dark:bg-gray-700" />
    <h3 class="text-lg font-semibold text-slate-700 dark:text-white mb-1 -mt-1">
      <Icon v-if="icon" :name="icon" class="mb-1 mr-1" />
      {{ title }}
    </h3>
    <template v-if="date">
      <time class=" text-sm leading-none text-gray-400">
        <Icon name="uil:building" />
        {{ name }}
      </time>
      <br>
    </template>
    <template v-if="date">
      <time class=" text-sm leading-none text-gray-400">
        <Icon name="uil:calender" />
        {{ date }}
      </time>
    </template>
    <template v-if="location">
      <br>
      <small class="text-sm leading-none text-gray-400">
        <Icon name="uil:location-point" />
        {{ location }}
      </small>
      <br>
    </template>
    <p v-if="description" class="my-2 text-base font-normal text-gray-500 dark:text-gray-400">
      {{ description }}
    </p>
  </li>
</template>
