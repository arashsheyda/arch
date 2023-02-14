<template>
  <div v-if="code" class="code-block" :class="language">
    <span v-if="filename" class="filename">
      {{ filename }}
    </span>
    <span v-if="language" class="language">
      {{ language }}
    </span>
    <slot />
    <button class="copy" @click="copy(code)">
      <Icon v-if="copied" name="uil:check" />
      <Icon v-else name="uil:copy" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'

const { copy, copied } = useClipboard()

defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: ''
  },
  filename: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss">
.code-block {
  position: relative;
  background: var(--color-body);
  border-radius: var(--border-radius);
  padding: 10px;
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
  overflow: auto;
  margin-bottom: 20px;

  &.dark {
    background: #070707;
  }

  pre {
    margin: 0;

    code {
      display: grid;

      .line {
        counter-increment: number;
        border-radius: 7px;

        &:before {
          opacity: 0.1;
          color: #fff;
          padding: 5px 15px 5px 10px;
          display: inline-block;
          content: counter(number);
        }

        &:hover {
          background-color: var(--color-light);

          &:before {
            opacity: 0.5;
          }
        }
      }
    }
  }

  .language {
    position: absolute;
    right: 10px;
    top: 12px;
    font-size: 11px;
    padding: 5px 10px;
  }

  .filename {
    position: absolute;
    bottom: 8px;
    right: 10px;
    font-size: 11px;
    padding: 5px 10px;
    border-radius: 0px 13px 0px 13px;
  }

  .copy {
    position: absolute;
    bottom: 10px;
    right: 10px;
    opacity: 0;
    border: none;
    font-size: 12px;
    padding: 5px 8px;
    border-radius: 5px;
    color: var(--color-dark);
    background: var(--color-light);
    box-shadow: 0 0 13px 3px var(--box-shadow);
    transition: all 0.3s ease;
  }

  &.js {
    .language {
      color: #f7df1e;
      text-shadow: 0 0 5px #f7df1e;
    }
  }

  &.vue {
    .language {
      color: #41b883;
      text-shadow: 0 0 5px #41b883;
    }
  }

  &.react {
    .language {
      color: #61dafb;
      text-shadow: 0 0 5px #61dafb;
    }
  }

  &.ts {
    .language {
      color: #007acc;
      text-shadow: 0 0 5px #007acc;
    }
  }

  &.html {
    .language {
      color: #e34c26;
      text-shadow: 0 0 5px #e34c26;
    }
  }

  &.css {
    .language {
      color: #2965f1;
      text-shadow: 0 0 5px #2965f1;
    }
  }

  &.md {
    .language {
      color: #1b7ed9;
      text-shadow: 0 0 5px #1b7ed9;
    }
  }

  &:hover {
    .copy {
      opacity: 1;

      &:hover {
        box-shadow: 0 0 7px 0px var(--box-shadow);
      }
    }

    .filename {
      opacity: 0;
    }

  }
}
</style>
