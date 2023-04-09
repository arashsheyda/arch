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
    <button class="relative group" @click="openModal = !openModal">
      <img class="relative z-10 rounded-lg group-hover:scale-90 transition-all" :src="getImg" :alt="name">
      <div class="absolute inset-0 mx-4 my-2 rounded-lg" :style="{ background: generateColor }" />
    </button>
    <ArchModal :title="name" :favicon="favicon" :opened="openModal" @close="openModal = false">
      <template #body>
        <ArchSlider :name="name" :images="images as string[]" />
        <div v-if="$slots.default" class="relative -mt-12 mx-8 mb-10">
          <div :style="{ '--arch-portfolio-color': generateColor }" class="bg-white bg-opacity-50 backdrop-blur px-8 py-4 rounded-lg shadow-lg mb-4">
            <ul v-if="links" class="flex justify-center gap-5">
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
        <ArchButton size="sm" @click="openModal = false">
          Close
        </ArchButton>
      </template>
    </ArchModal>
  </figure>
</template>

<style lang="scss">
h1, h2, h3, h4, h5, h6 {
  a {
    -webkit-text-fill-color: transparent;
    background: var(--arch-portfolio-color);
    -webkit-background-clip: text;
    background-clip: text;
  }
}
</style>
