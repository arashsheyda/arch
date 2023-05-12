<script lang="ts" setup>
interface Props {
  name: string
  hover: string
  color?: string
  shadow?: boolean
}

withDefaults(defineProps<Props>(), {
  shadow: true,
  color: undefined,
})
</script>

<template>
  <div class="badge text-center inline-flex" :style="{ '--arch-badge-hover': `${hover}`, '--arch-badge-color': `${color ? color : hover}` }">
    {{ name }}
  </div>
</template>

<style>
.badge {
  background: rgba(119, 119, 119, 0.1);
  padding: 5px 13px;
  margin: 7px;
  border-radius: 17px;
  color: var(--arch-badge-color);
  text-shadow: 0px 0px 7px var(--arch-badge-color);
  transition: all 0.3s ease;
}
.badge .badge-icon {
  opacity: 1;
  margin-right: 3px;
  transition: all 0.3s ease;
}
.badge:hover {
  cursor: pointer;
  color: #ffffff;
  text-shadow: 0px 0px 7px var(--arch-badge-color);
  background: var(--arch-badge-hover);
  box-shadow: 0 0 13px var(--arch-badge-hover);
  transition: all 0.3s ease;
}
.badge:hover .badge-icon {
  opacity: 0;
  margin-right: -22px;
  transition: all 0.3s ease;
}
</style>
