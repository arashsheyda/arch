<script lang="ts" setup>
import { onClickOutside, useWindowSize } from '@vueuse/core'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  favicon: {
    type: String,
    default: null,
    required: false,
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'>,
    default: 'md',
    required: false,
  },
  modelValue: {
    type: Boolean,
    required: false,
  },
  transition: {
    type: String as PropType<'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale'>,
    default: 'slide-up',
    required: false,
  },
  // TODO: add options for sticky, etc
})

const emit = defineEmits<{ (...args: any): void }>()
const modal = useVModel(props, 'modelValue', emit, { passive: true })

const container = ref<HTMLElement>()

watch(modal, (value) => {
  if (value)
    document.body.classList.add('overflow-hidden')
  else
    document.body.classList.remove('overflow-hidden')
})

onClickOutside(container, () => {
  modal.value = false
}, {
  ignore: ['.zoomable', '.medium-zoom--opened'],
})

const calculateSize = computed(() => {
  const sizeMap = {
    xs: 'sm:w-3/6 lg:w-1/6',
    sm: 'sm:w-4/6 lg:w-2/6',
    md: 'sm:w-5/6 lg:w-3/6',
    lg: 'sm:w-5/6 lg:w-4/6',
    xl: 'sm:w-6/6 lg:w-5/6',
    full: 'w-full',
  }
  return sizeMap[props.size]
})

const { height } = useWindowSize()
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="modal" fixed inset-0 z-9999 bg-black bg-opacity-50 backdrop-blur transition-all />
    </Transition>
    <Transition :name="transition">
      <div v-if="modal" fixed inset-0 z-9999>
        <div flex items-end justify-center p4 text-center class="sm:items-center sm:p-0">
          <div ref="container" :class="calculateSize" relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my8>
            <div bg-body overflow-y-auto :style="{ height: `${height - (height / 12)}px` }">
              <div sticky top-0 z-10 bg-glass flex="~ items-center justify-between" p3 shadow-lg>
                <h3 flex="~ items-center gap-2" text-xl font-semibold text-gray-900 dark:text-white>
                  <ProseImg :width="27" :src="favicon" :alt="title" />
                  <!-- <template v-if="favicon">
                    <ProseImg v-if="favicon.startsWith('/')" :width="27" :src="favicon" :alt="title" />
                    <Icon v-else :name="favicon" />
                  </template> -->
                  {{ title }}
                </h3>
                <button aria-label="Close" @click="modal = false">
                  <Icon name="carbon:close" text-base />
                  <span sr-only>Close</span>
                </button>
              </div>
              <div p4 mb8 text-base-light>
                <slot v-if="$slots.body" name="body" />
                <slot v-else />
              </div>
              <div absolute bottom-0 w-full bg-glass px4 py3 border="t base" class="sm:flex sm:flex-row-reverse sm:px6">
                <slot name="footer">
                  <button aria-label="Close" button="primary" @click="modal = false">
                    Close
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
