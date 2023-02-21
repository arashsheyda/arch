<script lang="ts" setup>
defineProps({
  fixed: {
    type: Boolean,
    default: false,
  },
})

const colorMode = useColorMode()

const toggleTheme = () => {
  const values = ['system', 'light', 'sepia', 'dark']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length
  colorMode.preference = values[next]
}
</script>

<template>
  <div class="color-mode-wrapper" :class="{ fixed }">
    <ClientOnly>
      <button class="color-mode" aria-label="Color Mode" @click="toggleTheme">
        <Icon v-if="colorMode.preference === 'dark'" name="uil:moon" />
        <Icon v-else-if="colorMode.preference === 'light'" name="uil:sun" />
        <Icon v-else-if="colorMode.preference === 'sepia'" name="uil:coffee" />
        <Icon v-else name="uil:desktop" />
      </button>
    </ClientOnly>
  </div>
</template>

<style lang="scss">
.color-mode-wrapper {
  position: absolute;
  right: -75px;
  top: 5px;

  &.fixed {
    position: fixed;
    top: unset;
    right: unset;
    bottom: 27px;
    left: 27px;
  }

  .color-mode {
    border-color: transparent;
    border-radius: 50%;
    color: var(--color-dark);
    padding: 8px 10px;
    cursor: pointer;
    background: var(--color-light);
    box-shadow: 0px 0px 17px rgba($color: #000000, $alpha: 0.3);

  }
}
</style>
