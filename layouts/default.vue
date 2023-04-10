<script lang="ts" setup>
const arch = useArch()
const minimize = ref(false)
const { page } = useContent()
</script>

<template>
  <div class="grid grid-cols-12 gap-5">
    <OgImageStatic :component="page.island || 'ArchOgImagePage'" :title="page.title" v-bind="page.ogImage || {}" />
    <ArchSidebar class="-mt-32 md:mt-0 md:col-span-3">
      <ArchBox :minimize="minimize" class="p-5" @minimize="minimize = !minimize">
        <div class="text-center">
          <figure class="flex justify-center">
            <ProseImg :width="minimize ? 50 : 117" height="117" class="transition-all" :src="arch.aside.image" :alt="arch.aside.name" />
          </figure>
          <div :class="{ 'hidden ': minimize }" class="pt-2">
            <h3 class="text-2xl font-bold dark:text-white">
              Arash Sheyda
            </h3>
            <div class="flex justify-center mt-3">
              <p class="w-2/3 py-3 px-0 rounded-lg text-sm bg-gray-100 dark:bg-darker dark:text-white">
                Full Stack Developer
              </p>
            </div>
          </div>
        </div>
        <hr class="my-5">
        <div class="grid grid-cols-4 md:block">
          <ArchSidebarInfoItem icon="uil:envelope" title="Email" value="arashi.sheyda@gmail.com" />
          <ArchSidebarInfoItem icon="uil:phone" title="Phone" value="+1 (732) 807-5358" />
          <ArchSidebarInfoItem icon="uil:building" title="Company" value="@" />
          <ArchSidebarInfoItem icon="uil:map" title="Location" value="Alberta, CA" />
        </div>
        <hr class="my-4">
        <ArchSocials />
      </ArchBox>
    </ArchSidebar>

    <ArchBox :size="9" class="pb-20">
      <slot />
      <ArchFooter />
    </ArchBox>
  </div>
</template>
