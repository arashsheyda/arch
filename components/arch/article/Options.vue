<template>
  <ul>
    <li>
      Change Color: {{ $colorMode.preference }}
    </li>
    <li>
      Font Size {{ settings.font.size }}
      <ClientOnly>
        <input
          :value="sizes.indexOf(settings.font.size)"
          :min="0"
          :max="sizes.length - 1"
          :step="1"
          type="range"
          @change="setFontSize"
        >
      </ClientOnly>
    </li>
    <li>
      <div class="color-box">
        <div v-for="color in colors" :key="color" :style="{background: color}" @click="setFontColor(color)" />
      </div>
    </li>
    <li>
      <div class="">
        <div v-for="family in families" :key="family" @click="setFontFamily(family)">
          {{ family }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { FontColor, FontSize, FontFamily } from '../../../types/settings'

const settings = useSettings()

const sizes = (new Array(18)).fill(0).map((_x, i) => `${10 + i}px`) as FontSize[]
const colors = ['var(--color-text)', 'var(--color-primary)', 'var(--color-secondary)'] as FontColor[]
const families = ['Poppins', 'sans-serif', 'Courier', 'monospace'] as FontFamily[]

const setFontSize = (e: Event) => {
  if (e.target && 'valueAsNumber' in e.target) { settings.value.font.size = sizes[e.target.valueAsNumber as number] }
}

const setFontColor = (color: FontColor) => {
  settings.value.font.color = color
}

const setFontFamily = (family: FontFamily) => {
  settings.value.font.family = family
}
</script>

<style lang="scss">
.color-box {
  display: flex;
  div {
    margin: 3px;
    padding: 10px;
    cursor: pointer;
    border-radius: 7px;
  }
}
</style>
