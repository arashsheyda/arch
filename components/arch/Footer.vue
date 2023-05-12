<script lang="ts" setup>
const arch = useArch()
</script>

<template>
  <footer absolute w-full bottom-0 left-0 right-0 text-base font-medium>
    <div flex justify-between p4 mx4 border="t base">
      <div>
        <NuxtLink to="https://nuxt.com/" title="Powered by Nuxt - Arch" class="powered">
          <span mr1>Powered by</span>
          <Icon name="logos:nuxt-icon" class="nuxt" />
          <Icon name="ArchIcon" class="arch" />
        </NuxtLink>
      </div>
      <div>
        &lt;Coded by
        <NuxtLink to="/" text-primary>
          Arash Sheyda
        </NuxtLink>
        © {{ new Date().getFullYear() }} /&gt;
      </div>
      <div v-if="arch.footer?.links?.length">
        <NuxtLink v-for="link of arch.footer!.links" :key="link.title" :title="link.title" :to="link.url" :target="link.target">
          <Icon v-if="link.icon" :name="link.icon" mb1 mr1 />
          {{ link.title }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
