<script lang="ts" setup>
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

const close = () => {
  emit('close')
}

const modal = ref<HTMLElement>()

const calcuteSize = computed(() => {
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

const windowHeight = computed(() => window.innerHeight)
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="opened" class="z-9999 fixed inset-0 bg-black bg-opacity-50 backdrop-blur transition-all" />
    </Transition>
    <Transition :name="transition">
      <div v-if="opened" class="z-9999 fixed inset-0 z-10">
        <div class="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div ref="modal" :class="calcuteSize" class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
            <div class="bg-[#f3f5fa] overflow-y-auto" :style="{ height: `${windowHeight - (windowHeight / 12)}px` }">
              <div class="sticky top-0 z-999 bg-white bg-opacity-50 backdrop-blur flex items-start justify-between p-4 shadow-lg">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white flex">
                  <ProseImg v-if="favicon" class="mr-2" :width="27" :src="favicon" :alt="title" />
                  {{ title }}
                </h3>
                <ArchButton label="Close Modal" size="sm" @click="close">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                  <span class="sr-only">Close modal</span>
                </ArchButton>
                <!-- <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal"></button> -->
              </div>
              <div class="p-4 mb-8">
                <slot name="body" />
              </div>
              <div class="absolute bottom-0 w-full bg-white bg-opacity-50 backdrop-blur px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <slot name="footer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// slide up
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

// slide down
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
}

// slide left
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.4s;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}

// slide right
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

// scale
.scale-enter-active,
.scale-leave-active {
  transition: all 0.4s;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
