<script lang="ts" setup>
const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
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
  <div v-if="code" class="code-block group one-dark-pro rounded-lg" :class="language" relative my4>
    <span
      v-if="language"
      :title="language"
      class="language"
      absolute right-3 top-.4
    >
      <span text-xs mr-2>
        {{ filename }}
      </span>
      <Icon :name="icon" rounded-lg />
    </span>
    <span
      v-if="language"
      :title="language"
      class="language"
      absolute right-3 bottom-1.1
    >
      <span text-xs mr-2>
        {{ filename }}
      </span>
      <Icon :name="icon" rounded-lg />
    </span>
    <div of-auto class="no-scrollbar" rounded-lg text-sm>
      <slot />
    </div>
    <div absolute top-.3 right-1 bottom-1.5>
      <button
        class="icon-xs"
        title="Copy"
        aria-label="Copy"
        sticky top-20 right-0
        bg-base py.5 px1.5 rounded-lg opacity-0 group-hover="opacity-100" transition-all
        @click="copy(code)"
      >
        <Icon v-if="copied" name="uil:check" />
        <Icon v-else name="uil:copy" />
      </button>
    </div>
  </div>
</template>
