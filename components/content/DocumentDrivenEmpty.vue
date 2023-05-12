<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps({
  value: {
    type: Object as PropType<ParsedContent>,
    required: true,
  },
})
</script>

<template>
  <ArchError code="204" title="Document is Empty" :message="`Add content to it by opening '${value._source}/${value._file}' file.`" icon="uil:file" />
</template>
