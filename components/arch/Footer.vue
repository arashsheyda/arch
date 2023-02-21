<script lang="ts" setup>
const arch = useArch()
</script>

<template>
  <footer class="footer-wrapper">
    <div class="footer">
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
          {{ arch.footer.copyright }}
        </NuxtLink>
        © {{ new Date().getFullYear() }} /&gt;
      </div>
      <div v-if="arch.footer.links">
        <NuxtLink v-for="link in arch.footer.links" :key="link.title" :to="link.url">
          {{ link.title }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 20px;
}

.footer {
  display: flex;
  padding-top: 25px;
  color: var(--color-text);
  justify-content: space-between;
  border-top: 1px solid var(--border-color);

  .copyright {
    color: var(--color-primary);
  }

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

  a {
    color: var(--color-text);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: var(--color-primary);
      transition: all 0.3s ease;
      filter: drop-shadow(0 0 7px var(--color-primary));
    }
  }
}

@media (max-width: 768px) {
  .footer-wrapper {
    padding-top: 0;
    padding-bottom: 50px;
    position: relative;
    text-align: center;

    .footer {
      flex-direction: column;
    }

    div {
      margin: 5px 0px;
    }
  }
}
</style>
