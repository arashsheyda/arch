<template>
  <footer class="absolute w-full bottom-0 left-0 right-0 dark:text-white">
    <div class="flex justify-between p-4 mx-4 border-t border-t-gray-200">
      <div>
        <NuxtLink to="https://nuxt.com/" title="Powered by Nuxt - Arch" class="powered">
          <span>Powered by</span>
          <Icon name="logos:nuxt-icon" class="nuxt" />
          <Icon name="ArchIcon" class="arch" />
        </NuxtLink>
      </div>
      <div>
        &lt;Coded by
        <NuxtLink to="/" class="copyright">
          Arash Sheyda
        </NuxtLink>
        © {{ new Date().getFullYear() }} /&gt;
      </div>
      <div>
        <NuxtLink to="#">
          Goals
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.powered {
  color: var(--color-text);
  transition: all 0.3s ease;

  span {
    margin-right: 5px;
    transition: all 0.3s ease;
  }

  .nuxt {
    opacity: 0;
    transition: all 0.3s ease;
    transform: translate(20px, 0px);
  }

  .arch {
    opacity: 1;
    transition: all 0.3s ease;
    height: 1.5rem;
    width: 1.5rem;
    transform: translate(-22px, 0px);
  }

  &:hover {
    color: #00dc82 !important;
    filter: drop-shadow(0 0 7px #00dc82) !important;

    .arch {
      opacity: 0;
      transform: translate(-50px, 0px);
    }

    .nuxt {
      opacity: 1;
      transform: translate(0px, 0px);
    }

  }
}
</style>
