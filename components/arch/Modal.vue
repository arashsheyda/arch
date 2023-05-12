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
  opened: {
    type: Boolean,
    default: false,
    required: false,
  },
  transition: {
    type: String as PropType<'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale'>,
    default: 'slide-up',
    required: false,
  },
  // TODO: add options for sticky, etc
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}

const modal = ref<HTMLElement>()

onClickOutside(modal, () => {
  close()
}, {
  ignore: ['.zoomable'],
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
      <div v-if="opened" fixed inset-0 z-9999 bg-black bg-opacity-50 backdrop-blur transition-all />
    </Transition>
    <Transition :name="transition">
      <div v-if="opened" fixed inset-0 z-9999>
        <div flex items-end justify-center p4 text-center class="sm:items-center sm:p-0">
          <div ref="modal" :class="calculateSize" relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my8>
            <div bg-body overflow-y-auto :style="{ height: `${height - (height / 12)}px` }">
              <div sticky top-0 z-10 bg-glass flex items-center justify-between p4 shadow-lg>
                <h3 flex text-xl font-semibold text-gray-900 dark:text-white>
                  <ProseImg v-if="favicon" mr2 :width="27" :src="favicon" :alt="title" />
                  {{ title }}
                </h3>
                <button aria-label="Close Modal" @click="close">
                  <svg text-base w-5 h-5 aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                  <span sr-only>Close modal</span>
                </button>
              </div>
              <div p4 mb8 text-base>
                <slot name="body" />
              </div>
              <div absolute bottom-0 w-full bg-glass px4 py3 border="t base" class="sm:flex sm:flex-row-reverse sm:px6">
                <slot name="footer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
