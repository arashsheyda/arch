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
  <div class="skill text-center inline-flex" :style="{ '--skill-hover': `${hover}`, '--skill-color': `${color ? color : hover}` }">
    {{ name }}
  </div>
</template>

<style>
.skill {
  background: rgba(119, 119, 119, 0.1);
  padding: 5px 13px;
  margin: 7px;
  border-radius: 17px;
  color: var(--skill-color);
  text-shadow: 0px 0px 7px var(--skill-color);
  transition: all 0.3s ease;
}
.skill .skill-icon {
  opacity: 1;
  margin-right: 3px;
  transition: all 0.3s ease;
}
.skill:hover {
  cursor: pointer;
  color: #ffffff;
  text-shadow: 0px 0px 7px var(--skill-color);
  background: var(--skill-hover);
  box-shadow: 0 0 13px var(--skill-hover);
  transition: all 0.3s ease;
}
.skill:hover .skill-icon {
  opacity: 0;
  margin-right: -22px;
  transition: all 0.3s ease;
}
</style>
