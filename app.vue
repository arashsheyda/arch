<script lang="ts" setup>
import '@unocss/reset/tailwind.css'
import './styles/global.css'

const arch = useArch()

useSeoMeta({
  titleTemplate: `%s | ${arch.value.general!.title}`,
  description: arch.value.general!.description,
  ogImage: arch.value.general!.image,
  ogImageAlt: arch.value.general!.title,
  twitterTitle: arch.value.general!.title,
  twitterDescription: arch.value.general!.description,
  twitterImage: arch.value.general!.image,
  twitterImageAlt: arch.value.general!.title,

  themeColor: arch.value.general!.themeColor,
})

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: arch.value.general!.favicon,
    },
  ],
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
