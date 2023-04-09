<script setup lang="ts">
defineProps({
  path: String,
  title: String,
  description: String,
})
const containerStyles = {
  padding: '10px 60px',
  backgroundImage: 'linear-gradient(to bottom right, #1f1f1f, #0a0a0a)',
}
const initialStyles = {
  'background': 'linear-gradient(to right, #0dc5f0, #015eea 75%)',
  'background-clip': 'text',
  '-webkit-background-clip': 'text',
  'color': 'transparent',
  'fontSize': '45px',
}
</script>

<template>
  <div :style="containerStyles" class="w-full h-full flex text-white items-center relative">
    <div class="pr-10" style="width: 700px;">
      <div class="font-bold mb-10 flex flex-row justify-between items-center">
        {{ title }}
      </div>
      <p :style="{ fontSize: '30px', lineHeight: '1.5em' }" class="text-gray-300 mb-10" v-html="description" />
    </div>
    <div class="items-center justify-center" style="width: 350px;">
      <!-- <img src="assets/images/logo.jpg" width="350" height="350" class="rounded-xl mb-10"> -->
      <div class="text-primary font-bold justify-center items-center flex" :style="initialStyles">
        Arash Sheyda
      </div>
    </div>
  </div>
</template>
