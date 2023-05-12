<script lang="ts" setup>
defineProps({
  code: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  redirectBack: {
    type: Boolean,
    default: true,
    required: false,
  },
  redirectText: {
    type: String,
    default: 'Go to home',
    required: false,
  },
  redirect: {
    type: String,
    default: '/',
    required: false,
  },
  icon: {
    type: String,
    default: null,
    required: false,
  },
  color: {
    type: String as PropType<'blue' | 'red' | 'green' | 'yellow' | 'orange'>,
    default: 'blue',
    required: false,
  },
  padding: {
    type: Boolean,
    default: true,
    required: false,
  },
})

const colors = {
  blue: {
    100: 'bg-blue-100',
    200: 'bg-blue-200',
    500: 'text-blue-500',
  },
  red: {
    100: 'bg-red-100',
    200: 'bg-red-200',
    500: 'text-red-500',
  },
  green: {
    100: 'bg-green-100',
    200: 'bg-green-200',
    500: 'text-green-500',
  },
  yellow: {
    100: 'bg-yellow-100',
    200: 'bg-yellow-200',
    500: 'text-yellow-500',
  },
  orange: {
    100: 'bg-orange-100',
    200: 'bg-orange-200',
    500: 'text-orange-500',
  },
}
</script>

<template>
  <div flex items-center justify-center w-full :class="{ 'md:p32 p8': padding }">
    <div text-center>
      <div v-if="icon" inline-flex rounded-full p4 :class="colors[color]['100']">
        <div :class="colors[color]['200']" rounded-full p4>
          <Icon :class="colors[color]['500']" w12 h12 :name="icon" />
        </div>
      </div>
      <h1 mt5 font-medium text-base lg-text-4xl>
        <strong :class="colors[color]['500']">{{ code }}</strong> | {{ title }}
      </h1>
      <p text-slate-500 mt4 lg-text-xl>
        {{ message }}
      </p>
    </div>
  </div>
</template>
