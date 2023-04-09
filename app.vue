<template>
  <Html lang="en_US">
    <Head>
      <SeoKit />
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
