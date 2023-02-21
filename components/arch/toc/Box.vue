<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
    default: null,
  },
  iconClass: {
    type: String,
    required: false,
    default: null,
  },
})

const minimized = ref<boolean>(false)
</script>

<template>
  <div class="box" :class="{ minimized }">
    <div class="header">
      <span>
        <Icon v-if="icon" :name="icon" :class="iconClass" />
        {{ name }}
      </span>
      <div class="minimizer" @click="minimized = !minimized">
        <Icon v-if="minimized" name="tabler:minimize" />
        <Icon v-else name="tabler:arrows-diagonal-minimize-2" />
      </div>
    </div>
    <hr>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.box {
  .header {
    margin-bottom: 30px;

    span {
      position: absolute;
      top: 12px;
      left: 10px;
    }

    .minimizer {
      position: absolute;
      top: 10px;
      right: 15px;
      z-index: 9;
      cursor: pointer;
    }
  }

  .content {
    min-height: 100px;
    transition: all 0.3s ease;
  }

  &.minimized {
    .header {
      margin-bottom: 0px;

      span {
        top: 10px;
      }
    }

    hr {
      width: 0;
      margin: 0;
      transition: all 0.3s ease;
    }

    .content {

      height: 0;
      opacity: 0;
      min-height: 0;
      transition: all 0.3s ease;
    }
  }
}
</style>
