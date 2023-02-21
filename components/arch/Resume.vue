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
  <article class="timeline__item pb-4">
    <h5 class="title title--h5 timeline__title">
      <Icon v-if="icon" :name="icon" />
      <span>{{ title }}</span>
    </h5>
    <span v-if="name">
      <small>
        <Icon name="uil:building" />
      </small>
      {{ name }}
    </span>
    <span v-if="date" class="timeline__period">
      <br>
      <small>
        <Icon name="uil:calender" />
      </small>
      {{ date }}
    </span>
    <template v-if="location">
      <br>
      <small>
        <Icon name="uil:location-point" />
        {{ location }}
      </small>
    </template>
    <p v-if="description" class="timeline__description">
      {{ description }}
    </p>
  </article>
</template>

<style lang="scss">
.timeline__item {
  small {
    svg {
      transform: translateY(-2px);
    }
  }
}
</style>
