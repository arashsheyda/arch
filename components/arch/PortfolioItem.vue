<script lang="ts" setup>
interface PortfolioLink {
  title: string
  icon: string
  url: string
}

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  favicon: {
    type: String,
    default: null,
    required: false,
  },
  color: {
    type: [String, Array],
    default: 'var(--color-text)',
    required: false,
  },
  images: {
    type: [String, Array],
    required: true,
  },
  links: {
    type: Array as PropType<PortfolioLink[]>,
    required: false,
    default: null,
  },
  noBorderRadius: {
    type: Boolean,
    required: false,
    default: false,
  },
  category: {
    type: String,
    required: false,
    default: null,
  },
  description: {
    type: String,
    required: false,
    default: null,
  },
})

const openModal = ref(false)

watch(openModal, (value) => {
  if (value)
    document.body.classList.add('overflow-hidden')
  else
    document.body.classList.remove('overflow-hidden')
})

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
  <figure>
    <button relative class="group" @click="openModal = !openModal">
      <img relative z-10 rounded-lg transition-all class="group-hover:scale-90" :src="getImg" :alt="name">
      <div absolute inset-0 mx4 my2 rounded-lg :style="{ background: generateColor }" />
    </button>
    <ArchModal :title="name" :favicon="favicon" :opened="openModal" @close="openModal = false">
      <template #body>
        <ArchSlider :name="name" :images="images" />
        <div v-if="$slots.default" relative mx8 mb10 mt--12>
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
      </template>
      <template #footer>
        <button aria-label="Close" button="primary" @click="openModal = false">
          Close
        </button>
      </template>
    </ArchModal>
  </figure>
</template>

<style>
h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
  -webkit-text-fill-color: transparent;
  background: var(--arch-portfolio-color);
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
