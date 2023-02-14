<template>
  <Teleport to="body">
    <transition name="fade" mode="out-in">
      <div v-if="opened" class="modal-overly" />
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="opened" class="modal">
        <div ref="modal" class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <ProseImg v-if="favicon" :width="27" :src="favicon" :alt="title" />
              {{ title }}
            </h5>
            <ArchButton class="close" size="sm" @click="close">
              <Icon name="tabler:x" />
            </ArchButton>
          </div>
          <div class="modal-body">
            <slot name="body" />
          </div>
          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'

const modal = ref<HTMLElement>()

onClickOutside(modal, () => {
  close()
})

defineProps({
  title: {
    type: String,
    required: true
  },
  favicon: {
    type: String,
    default: null,
    required: false
  },
  opened: {
    type: Boolean,
    default: false,
    required: false
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<style lang="scss">
body {
  &.modal-open {
    overflow: hidden;
  }
}

.modal-overly {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99998;
  backdrop-filter: blur(7px);
  background: rgba($color: #000000, $alpha: 0.5);
}

.modal {
  z-index: 99999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 95%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: block;
  background: var(--color-body);
  border-radius: var(--border-radius);
}

.modal-content {
  position: relative;
  height: auto;
  max-height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);

  .modal-header {
    position: sticky;
    top: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid var(--border-color);
    width: 100%;
    z-index: 99999;
    background: var(--color-body);
    box-shadow: 0px 0px 17px var(--box-shadow);

    .modal-title {
      margin-bottom: 0;
      line-height: 1.5;
    }

    .close {
      color: var(--color-dark);
      background: var(--color-light);
    }
  }

  .modal-body {
    position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 25px 50px;

    img {
      border: 1px solid var(--color-dark);
    }
  }

  .modal-footer {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 0px 20px 20px 20px;
  }
}

.modal-footer>:not(:first-child) {
  margin-left: .25rem
}

.modal-footer>:not(:last-child) {
  margin-right: .25rem
}

@media (max-width: 787px) {
.modal {
  width: 90%;
  height: 90%;
}
}

@media (min-width:992px) {

  .modal-lg,
  .modal-xl {
    max-width: 800px
  }
}

@media (min-width:1200px) {
  .modal-xl {
    max-width: 1140px
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
