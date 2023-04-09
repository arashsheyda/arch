<script lang="ts" setup>
const arch = useArch()

useSeoMeta({
  titleTemplate: `%s | ${arch.value.general!.title}`,
  description: arch.value.general!.description,
  keywords: arch.value.general!.keywords,
  ogImage: arch.value.general!.image,
  ogImageAlt: arch.value.general!.title,
  twitterImage: arch.value.general!.image,
  twitterImageAlt: arch.value.general!.title,

  themeColor: arch.value.general!.themeColor,
})
</script>

<template>
  <Html>
    <Head>
      <SeoKit :language="arch.general!.locale" />
    </Head>
    <Body>
      <ArchLayout>
        <NuxtPage />
      </ArchLayout>
    </Body>
  </Html>
</template>

<style lang="scss">
svg {
  width: 1.3rem;
  height: 1.3rem;
}

.medium-zoom-overlay {
  background: rgba($color: #000000, $alpha: 0.2) !important;
  z-index: 99999 !important;
  backdrop-filter: blur(10px);
}

.medium-zoom-image {
  z-index: 999999 !important;
}
/* body {
  background: #f9fafc;
} */
</style>
