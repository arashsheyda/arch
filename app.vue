<script lang="ts" setup>
const arch = useArch()
</script>

<template>
  <Html :lang="arch.locale">
    <Body>
      <ArchLayout>
        <NuxtPage />
      </ArchLayout>
    </Body>
  </Html>
</template>

<style lang="ts">
css({
  ':root': {
    '--color-primary': '{color.primary.light}',
    '--color-secondary': '{color.secondary.light}',
    '--color-light': '{color.light.light}',
    '--color-dark': '{color.dark.light}',
    '--color-body': '{color.body.light}',
    '--color-nav': '{color.nav.light}',
    '--color-text': '{color.text.light}',
    '--border-radius': '{border.radius.light}',
    '--border-color': '{border.color.light}',
    '--box-shadow': '{shadow.light}',
  },
  '.sepia-mode': {
    '--color-primary': '{color.primary.sepia}',
    '--color-secondary': '{color.secondary.sepia}',
    '--color-light': '{color.light.sepia}',
    '--color-dark': '{color.dark.sepia}',
    '--color-body': '{color.body.sepia}',
    '--color-nav': '{color.nav.sepia}',
    '--color-text': '{color.text.sepia}',
    '--border-radius': '{border.radius.sepia}',
    '--border-color': '{border.color.sepia}',
    '--box-shadow': '{shadow.sepia}',
  },
  '.dark-mode': {
    '--color-primary': '{color.primary.dark}',
    '--color-secondary': '{color.secondary.dark}',
    '--color-light': '{color.light.dark}',
    '--color-dark': '{color.dark.dark}',
    '--color-body': '{color.body.dark}',
    '--color-nav': '{color.nav.dark}',
    '--color-text': '{color.text.dark}',
    '--border-radius': '{border.radius.dark}',
    '--border-color': '{border.color.dark}',
    '--box-shadow': '{shadow.dark}',
  },
})
</style>
