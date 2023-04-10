<script lang="ts" setup>
defineProps({
  icon: {
    type: String,
    default: null,
    required: false,
  },
  image: {
    type: String,
    default: null,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="group p-1 bg-animate rounded-2xl text-center transition-all">
    <div class="w-full h-full p-8 rounded-xl bg-gray-100 dark:bg-darker">
      <div class="flex justify-center mb-2">
        <Icon v-if="icon" :name="icon" />
        <ProseImg v-if="image" height="50" width="50" :src="image" :alt="title" />
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
  </div>
</template>

<style>
.bg-animate:hover {
  background: linear-gradient(277deg, #fd004c, #fe9000, #fff020, #3edf4b, #3363ff, #b102b7, #fd004c);
  background-size: 300%;
  animation: AnimateBackgroud 2s ease-out infinite;
}

@keyframes AnimateBackgroud {
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
