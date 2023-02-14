<template>
  <div class="row">
    <ArchSidebar :sticky="true" :minimizer="true">
      <div class="box">
        <ArchSidebarHeader :name="arch.info.name" :job="arch.info.job" :image="arch.info.image" :hover-image="arch.info.hoverImage" />
        <div class="sidebar-additional-info">
          <ul class="details-info">
            <ArchSidebarItem v-if="arch.info.email" title="Email" icon="uil:envelope" :value="arch.info.email" :link="`mailto:${arch.info.email}`" />
            <ArchSidebarItem v-if="arch.info.phone" title="Phone" icon="uil:phone" :value="arch.info.phone" :link="`tel:${arch.info.email}`" />
            <ArchSidebarItem v-if="arch.info.company" title="Work at" icon="uil:building" :value="`@ ${arch.info.company}`" />
            <ArchSidebarItem v-if="arch.info.location" title="Location" icon="uil:map-marker" :value="arch.info.location" />
          </ul>
          <ArchSocials />
        </div>
      </div>
    </ArchSidebar>

    <div id="box-content" :class="minimized ? 'col-12 col-md-12 col-lg-11' : 'col-12 col-md-12 col-lg-9'">
      <div class="box box-content col-12">
        <main>
          <slot />
        </main>

        <ArchFooter />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const arch = useArch()
const { minimized } = useSidebar()
</script>

<style lang="scss">

</style>
