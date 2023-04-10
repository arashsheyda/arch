<script lang="ts" setup>
const colorMode = useColorMode()

const toggleTheme = () => {
  const values = ['system', 'light', 'coffee', 'dark']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length
  colorMode.preference = values[next]
}
</script>

<template>
  <!-- class="fixed bg-white left-4 bottom-[28px] px-3 py-2.5 shadow-lg" -->
  <ArchButton
    label="Color Mode"
    rounded="full"
    variant="white"
    shadow="lg"
    :class="`color-mode-${colorMode.preference}`"
    class="fixed left-4 md:bottom-6 bottom-16 dark:bg-dark"
    @click="toggleTheme"
  >
    <Icon v-if="colorMode.preference === 'dark'" name="line-md:moon-alt-loop" />
    <Icon v-else-if="colorMode.preference === 'light'" name="line-md:moon-alt-to-sunny-outline-loop-transition" />
    <Icon v-else-if="colorMode.preference === 'coffee'" name="line-md:coffee-half-empty-twotone-loop" />
    <Icon v-else name="line-md:computer" />
  </ArchButton>
</template>

<style lang="scss">
.color-mode-light  {
  svg {
    color: #f9530b;
    filter: drop-shadow(0 0 5px #f9530b);
  }
}

.color-mode-coffee {
  svg {
    color: #712409;
    filter: drop-shadow(0 0 5px #9a572a);
  }
}

.color-mode-dark {
  svg {
    color: #7b1b98;
    filter: drop-shadow(0 0 5px #2d20d2);
  }
}

.color-mode-system {
  svg {
    color: var(--arch-color-primary);
    filter: drop-shadow(0 0 5px var(--arch-color-primary));
  }
}
</style>
