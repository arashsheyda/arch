<script lang="ts" setup>
const arch = useArch()
const minimize = ref(false)
let { page } = useContent()
page = page || {}
const { y } = useWindowScroll()
</script>

<template>
  <div bg-body class="arch-layout">
    <NuxtLoadingIndicator color="" />
    <NuxtScrollIndicator color="" element-id="arch-nav" :border-radius="7" />
    <main pt64 pb4>
      <div id="arch-banner" h-64 absolute top-0 left-0 w-full>
        <ArchBanner />
      </div>
      <ArchNavbar />
      <div container m-auto px10 h-full min-h-screen>
        <div id="arch-content" relative mt8 text-white>
          <template v-if="page?.layout === 'default'">
            <div grid="~ cols-12" gap-5>
              <ArchSidebar md-col-span-3 mt--32>
                <ArchBox p5 :minimize="minimize" @minimize="minimize = !minimize">
                  <div text-center>
                    <figure flex justify-center>
                      <ProseImg :width="minimize ? 50 : 117" height="117" transition-all :src="arch.aside?.image" :alt="arch.aside?.name" />
                    </figure>
                    <div mt4 :class="{ 'hidden ': minimize }">
                      <h3 text="2xl base" font-bold>
                        {{ arch.aside?.name }}
                      </h3>
                      <div flex justify-center mt2>
                        <p text="sm base" py3 rounded-lg bg-gray-100 dark:bg-darker class=" w-2/3">
                          {{ arch.aside?.job }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div a-divider />
                  <div grid="~ cols-4" md-block>
                    <ArchSidebarInfoItem v-if="arch.aside?.email" icon="uil:envelope" title="Email" :value="arch.aside.email" />
                    <ArchSidebarInfoItem v-if="arch.aside?.phone" icon="uil:phone" title="Phone" :value="arch.aside.phone" />
                    <ArchSidebarInfoItem v-if="arch.aside?.company" icon="uil:building" title="Company" :value="arch.aside.company" />
                    <ArchSidebarInfoItem v-if="arch.aside?.location" icon="uil:map" title="Location" :value="arch.aside.location" />
                  </div>
                  <div a-divider />
                  <ArchSocials />
                </ArchBox>
              </ArchSidebar>

              <ArchBox md:col-span-9 pb20 mb16 md-m0 p4>
                <slot />
                <ArchFooter />
              </ArchBox>
            </div>
          </template>
          <slot v-else />
        </div>
      </div>
    </main>
    <ArchColorMode />
    <Transition name="slide-right">
      <ArchScrollTopTop v-if="y > 77" />
    </Transition>
  </div>
</template>

<style>
::selection {
  @apply bg-primary;
  -webkit-text-fill-color: #ffffff;
  color: #ffffff;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  @apply bg-white dark:bg-dark
}

::-webkit-scrollbar-thumb {
  @apply bg-primary;
}

img {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: Poppins,sans-serif;
  font-weight: bold;
  line-height: 1.3;
  font-size: 2rem;
}

h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
  @apply bg-gradient-to-r from-primary to-secondary;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

.nuxt-loading-indicator, .nuxt-scroll-indicator {
  @apply bg-gradient-to-r from-secondary to-primary;
}
</style>
