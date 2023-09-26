<script lang="ts" setup>
interface PortfolioLink {
  title: string
  icon: string
  url: string
}

const props = withDefaults(defineProps<{
  name: string
  favicon?: string
  images?: string | string[]
  color?: string | string[]
  links?: PortfolioLink[]
  noBorderRadius?: boolean
  category?: string
  description?: string
}>(), {
  color: 'white',
  images: () => [],
  noBorderRadius: false,
})

const modal = ref(false)

const getImg = computed<string>(() => {
  if (Array.isArray(props.images))
    return props.images[0] as string
  else
    return props.images
})

const generateColor = computed(() => {
  if (Array.isArray(props.color)) {
    const gradient = props.color.map((color, index) => {
      if (index === 0)
        return color
      else
        return `${color} ${index * 100 / (props.color.length - 1)}%`
    }).join(', ')

    return `linear-gradient(90deg, ${gradient})`
  }
  else { return props.color }
})
</script>

<template>
  <figure grid items-center>
    <button relative class="group" @click="modal = !modal">
      <img relative z-10 rounded-lg transition-all class="group-hover:scale-90" :src="getImg" :alt="name">
      <div absolute inset-0 mx3 my1.5 rounded-lg :style="{ background: generateColor }" />
    </button>
    <ArchModal v-model="modal" :title="name" :favicon="favicon">
      <ArchSlider :name="name" :images="images" />
      <div v-if="$slots.default" class="portfolio " relative mx8 mb10 mt--12>
        <div :style="{ '--arch-portfolio-color': generateColor }" bg-base rounded-lg shadow-lg px8 py4 mb4>
          <ul v-if="links" flex justify-center gap-5>
            <li v-for="link in links" :key="link.title">
              <NuxtLink :to="link.url" target="_blank">
                <Icon :name="link.icon" />
              </NuxtLink>
            </li>
          </ul>
          <slot />
        </div>
      </div>
    </ArchModal>
  </figure>
</template>

<style>
.portfolio h1 a, .portfolio  h2 a, .portfolio  h3 a, .portfolio  h4 a, .portfolio  h5 a, .portfolio  h6 a {
  -webkit-text-fill-color: transparent;
  background: var(--arch-portfolio-color);
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
