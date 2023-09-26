<script lang="ts" setup>
import { version } from '~arch/package.json'

const arch = useArch()

const settings = ref(false)
</script>

<template>
  <footer absolute w-full bottom-0 left-0 right-0 text-base font-medium>
    <div md:flex flex-1 text-center :justify="!arch.footer!.poweredBy && !arch.footer!.links!.length ? 'center' : 'between'" py4 mx4 border="t base">
      <div>
        <button class="powered" title="Powered by Nuxt - Arch" @click="settings = !settings">
          <Icon name="carbon:settings" w-5 h-5 mr1 mt.3 />
          <template v-if="arch.footer!.poweredBy">
            <span mr1>Powered by</span>
            <Icon name="logos:nuxt-icon" class="nuxt" />
            <Icon name="ArchIcon" class="arch" />
          </template>
        </button>
      </div>
      <div>
        &lt;Coded by
        <NuxtLink to="/" text-primary>
          {{ arch.footer?.copyright?.name }}
        </NuxtLink>
        © {{ new Date().getFullYear() }} /&gt;
      </div>
      <ul v-if="arch.footer?.links?.length" flex="~ gap-1 justify-center">
        <li v-for="item, index of arch.footer?.links" :key="item.title">
          <span v-if="index">
            ·
          </span>
          <NuxtLink flex="inline items-center gap-2" :title="item.title" :to="item.url" :target="item.target">
            <Icon v-if="item.icon" :name="item.icon" />
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
  <ArchModal
    v-model="settings"
    title="Arch Settings"
    favicon="carbon:settings"
  >
    <div>
      <!-- <div a-divider /> -->
      <h2 class="gradient text-center">
        Arch Info:
      </h2>
      <ArchSlider name="name" :images="['https://raw.githubusercontent.com/arashsheyda/arch/main/.playground/public/cover.jpg']" />
      <ul mt4 flex text-center justify-center>
        <div flex="~ gap-2">
          <ProseA href="https://www.npmjs.com/package/nuxt-arch">
            v{{ version }}
          </ProseA>
          -
          <ProseA href="https://github.com/sponsors/arashsheyda">
            Become an Sponsor
          </ProseA>
          -
          <ProseA href="https://github.com/arashsheyda/arch">
            Repository
          </ProseA>
          -
          <ProseA href="https://github.com/arashsheyda/arch/issues">
            Bug Reports
          </ProseA>
        </div>
      </ul>
    </div>
  </ArchModal>
</template>
