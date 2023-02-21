<script lang="ts" setup>
import type { PropType } from 'vue'
interface fetchProp {
  key: string
  path: string
  component: string
}

const props = defineProps({
  fetch: {
    type: Object as PropType<fetchProp>,
    default: null,
  },
  gridable: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
})

const grid = ref<boolean>(false)

const fetchData = props.fetch ? await useAsyncData(props.fetch!.key, () => queryContent(props.fetch!.path).sort({ date: -1 }).where({ published: true }).find()) : null
</script>

<template>
  <div class="row eq-height" :class="[{ list: grid }, { 'justify-content-center': center }]">
    <template v-if="fetch">
      <component :is="fetch?.component" v-for="item in fetchData?.data.value" :key="item._id" :item="item" />
    </template>
    <template v-else>
      <slot />
    </template>
  </div>

  <div v-if="gridable" class="gridable" @click="grid = !grid">
    <Icon v-if="grid" name="tabler:layout-grid" />
    <Icon v-else name="tabler:list" />
  </div>
</template>

<style lang="scss">
.eq-height {
  &.row {
    display: flex;
    flex-wrap: wrap;
  }
  [class*="col-"] {
    display: grid;
    flex-direction: inherit;
  }
}

.gridable {
  position: absolute;
  top: 30px;
  right: 20px;
  background: var(--color-body);
  border-radius: var(--border-radius);
  padding: 10px;
  cursor: pointer;

  svg {
    padding: 0 !important;
    margin: 0 !important;
    height: 1.3rem !important;
    width: 1.3rem !important;
  }
}
</style>
