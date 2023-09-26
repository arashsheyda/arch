<script lang="ts" setup>
const arch = useArch()
const minimize = ref(false)
let { page } = useContent()
page = page || {}
const { y } = useWindowScroll()

function formatPhone(phone: string) {
  return phone.replace(/[\s()\-+]/g, '').replace(/^1/, '00')
}

const hideBanner = computed(() => typeof arch.value.banner === 'boolean' && arch.value.banner === false)
const toc = ref(true)
const enableToc = computed(() => page.value.toc && page.value.body.children.length === 1 && toc.value)
const tocLinks = computed(() => {
  if (page.value.toc && toc.value && page.value.body.children.length === 1) {
    return page.value.body.children[0].children.map((item: any) => ({
      text: item.props.title,
      id: item.props.title?.toLowerCase().replace(' ', '-'),
      icon: JSON.parse(item.props[':icon']),
      depth: item.props[':h'],
    }))
  }

  return []
})
</script>

<template>
  <div bg-body class="arch-layout">
    <!-- <div v-if="arch.general?.grain" class="grain" /> -->
    <NuxtLoadingIndicator color="" />
    <NuxtScrollIndicator color="" element-id="arch-nav" :border-radius="7" />
    <main :class=" { 'pt-64': !hideBanner } " pb4>
      <div v-if="!hideBanner" id="arch-banner" h-64 absolute top-0 left-0 w-full>
        <ArchBanner />
      </div>
      <ArchNavbar :hide-banner="hideBanner" />
      <div mx-auto box-content max-w-1250px md:px-20 px-10 min-h-screen>
        <div id="arch-content" :class="hideBanner ? 'mt12' : 'mt5'" relative>
          <template v-if="page?.layout === 'default'">
            <div grid="~ cols-12 gap-4" text-base-light>
              <ArchSidebar md-col-span-3 mt--32>
                <ArchBox p5 :minimize="minimize" @minimize="minimize = !minimize">
                  <div text-center>
                    <figure v-if="arch.aside?.image" flex justify-center>
                      <ProseImg :width="minimize ? 50 : 117" :height="117" transition-all :src="arch.aside.image" :alt="arch.aside?.name" />
                    </figure>
                    <div mt4 :class="{ 'hidden ': minimize }">
                      <h3 text="2xl base" font-bold>
                        {{ arch.aside?.name }}
                      </h3>
                      <div flex justify-center mt2>
                        <p text="sm base" py2 rounded-lg bg-gray-100 dark:bg-darker class=" w-1/2" text-xs>
                          {{ arch.aside?.job }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div a-divider />
                  <div grid="~ cols-4" md-block>
                    <ArchSidebarInfoItem v-if="arch.aside?.email" icon="uil:envelope" title="Email" :value="arch.aside.email" :link="`mailto:${arch.aside.email}`" />
                    <ArchSidebarInfoItem v-if="arch.aside?.phone" icon="uil:phone" title="Phone" :value="arch.aside.phone" :link="`tel:${formatPhone(arch.aside.phone)}`" />
                    <ArchSidebarInfoItem v-if="arch.aside?.company" icon="uil:building" title="Company" :value="arch.aside.company" />
                    <ArchSidebarInfoItem v-if="arch.aside?.location" icon="uil:map-marker" title="Location" :value="arch.aside.location" />
                  </div>
                  <div a-divider />
                  <template v-if="arch.general?.sponsor">
                    <NuxtLink
                      title="send some Love"
                      :to="arch.general!.sponsor"
                      target="_blank"
                      flex="~ justify-center gap-2 items-end"
                      w-full rounded-md p2
                      border="~ pink" text-pink
                      hover="bg-pink text-base"
                      transition duration-300
                    >
                      <span>
                        Sponsor
                      </span>
                      <Icon name="carbon:favorite" />
                    </NuxtLink>
                    <div a-divider />
                  </template>
                  <ArchSocials />
                </ArchBox>
              </ArchSidebar>

              <div md:col-span-9 col-span-12>
                <div grid="~ cols-12 gap-4">
                  <ArchBox :class="enableToc ? 'lg:col-span-9' : 'col-span-12'" pb20 mb16 md-m0 p4>
                    <div md:pb0 pb-5>
                      <slot />
                    </div>
                    <ArchFooter />
                  </ArchBox>
                  <!-- TODO: optimize -->
                  <div v-if="enableToc" class="lg:col-span-3 md:col-span-0 lg:block md:hidden sm:hidden hidden">
                    <ArchBox class="sticky top-17 p4" title="Table Of Contents" icon="uil:list-ui-alt">
                      <ArchPostToc :links="tocLinks" />
                    </ArchBox>
                  </div>
                </div>
              </div>
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
}

h1 a, h2 a, h3 a, h4 a, h5 a, h6 a, h1.gradient, h2.gradient, h3.gradient, h4.gradient, h5.gradient, h6.gradient {
  @apply bg-gradient-to-r from-primary to-secondary;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

.nuxt-loading-indicator, .nuxt-scroll-indicator {
  @apply bg-gradient-to-r from-secondary to-primary;
}
</style>
