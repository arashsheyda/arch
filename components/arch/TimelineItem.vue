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
  <li m4>
    <div absolute left--2 w-4 h-4 bg-primary rounded-full border="~ base 2" />
    <h3 text-lg font-semibold text-slate-700 dark:text-white>
      <Icon v-if="icon" :name="icon" mb1 mr1 />
      {{ title }}
    </h3>
    <template v-if="date">
      <time text-sm leading-none text-gray-400>
        <Icon name="uil:building" />
        {{ name }}
      </time>
      <br>
    </template>
    <template v-if="date">
      <time text-sm leading-none text-gray-400>
        <Icon name="uil:calender" />
        {{ date }}
      </time>
    </template>
    <template v-if="location">
      <br>
      <small text-sm leading-none text-gray-400>
        <Icon name="uil:location-point" />
        {{ location }}
      </small>
      <br>
    </template>
    <p v-if="description" my2 text-base font-normal text-gray-500 dark:text-gray-400>
      {{ description }}
    </p>
  </li>
</template>
