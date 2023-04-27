<script lang="ts" setup>
const gradient = 'linear-gradient(to right, var(--arch-color-secondary), var(--arch-color-primary))'
</script>

<template>
  <div class="arch-layout bg-slate-100 dark:bg-darker coffee:bg-orange-200">
    <NuxtLoadingIndicator :color="gradient" />
    <NuxtScrollIndicator :color="gradient" element-id="arch-nav" :border-radius="7" />
    <main class="pt-64 pb-4">
      <div id="arch-banner" class="h-64 absolute top-0 left-0 w-full">
        <ArchBanner />
      </div>
      <ArchNavbar />
      <div class="container m-auto px-10">
        <div id="arch-content" class="relative mt-8">
          <slot />
        </div>
      </div>
    </main>
    <ArchColorMode />
    <ArchScrollTopTop />
  </div>
</template>

<style lang="scss">
:root {
  --arch-color-primary: #00cfff;
  --arch-color-secondary: #0150C6;
}

.dark:root {
  --arch-color-primary: #00cfff;
  --arch-color-secondary: #0150C6;
  --arch-color-dark: #1f1f1f;
  --arch-color-darker: #121212;
}

::selection {
  background: var(--arch-color-primary);
  -webkit-text-fill-color: #ffffff;
  color: #ffffff;
}

::-webkit-scrollbar {
  width: 5px;
  /* background: var(--color-light); */
}

::-webkit-scrollbar-thumb {
  background: var(--arch-color-primary);
  /* border-radius: var(--arch-border-radius); */
}

img {
  /* no select */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* no drag */
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
  user-drag: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: Poppins,sans-serif;
  font-weight: bold;
  line-height: 1.3;
  font-size: 2rem;
  a {
    -webkit-text-fill-color: transparent;
    background: linear-gradient(90deg, var(--arch-color-primary) 0%, var(--arch-color-secondary) 100%);
    -webkit-background-clip: text;
    background-clip: text;
  }
}
</style>
