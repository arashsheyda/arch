<script lang="ts" setup>
const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: '',
  },
  filename: {
    type: String,
    default: '',
  },
})

const icons = {
  bash: 'carbon:terminal',
  sh: 'carbon:terminal',
  zsh: 'carbon:terminal',
  shell: 'carbon:terminal',
  js: 'vscode-icons:file-type-js-official',
  ts: 'vscode-icons:file-type-typescript-official',
  vue: 'file-icons:vue',
  react: 'vscode-icons:file-type-reactts',
  md: 'vscode-icons:file-type-markdown',
  docker: 'vscode-icons:file-type-docker-2',
} as any

const icon = computed(() => {
  return icons[props.language] || `vscode-icons:file-type-${props.language}`
})

const { copy, copied } = useClipboard()
</script>

<template>
  <div v-if="code" class="code-block group" :class="language" relative bg-base-dark rounded-lg p2 mb4>
    <span v-if="filename" class="filename">
      {{ filename }}
    </span>
    <span v-if="language" :title="language" class="language">
      <Icon :name="icon" rounded-lg />
    </span>
    <div class="of-auto">
      <slot />
    </div>
    <button absolute bottom-2 right-3 bg-base py1 px2 rounded-lg opacity-0 group-hover-opacity-100 transition-all @click="copy(code)">
      <Icon v-if="copied" name="uil:check" />
      <Icon v-else name="uil:copy" />
    </button>
  </div>
</template>
