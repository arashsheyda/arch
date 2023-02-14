<template>
  <ArchError code="204" title="🗎 is Empty" :centered="false" :message="`Add content to it by opening ${value._source}/${value._file} file.`" />
</template>

<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { PropType } from 'vue'

defineProps({
  value: {
    type: Object as PropType<ParsedContent>,
    required: true
  }
})
</script>

<style lang=scss>

</style>
