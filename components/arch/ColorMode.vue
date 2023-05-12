<script lang="ts" setup>
const colorMode = useColorMode()

function toggleTheme() {
  const values = ['system', 'light', 'dark']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length
  colorMode.preference = values[next]
}
</script>

<template>
  <button
    aria-label="Color Mode"
    rounded-full
    bg-white
    shadow-lg
    px-3 py-3 h-12 w-12
    :class="`color-mode-${colorMode.preference}`"
    fixed left-4 md:bottom-6 bottom-16
    dark:bg-dark
    @click="toggleTheme"
  >
    <Icon v-if="colorMode.preference === 'dark'" name="line-md:moon-alt-loop" />
    <Icon v-else-if="colorMode.preference === 'light'" name="line-md:moon-alt-to-sunny-outline-loop-transition" />
    <Icon v-else-if="colorMode.preference === 'coffee'" name="line-md:coffee-half-empty-twotone-loop" />
    <Icon v-else text-primary name="line-md:computer" />
  </button>
</template>
