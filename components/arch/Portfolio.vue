<template>
  <figure class="col-lg-6 col-md-6 col-sm-6 col-6" :style="{'--portfolio-color': color}">
    <div class="portfolio-item hoverable" :class="{ 'no-border-radius': noBorderRadius }" @click="openModal = !openModal">
      <ProseImg :src="Array.isArray(images) ? images[0] : images" :alt="name" />
      <div class="portfolio-overly" />
    </div>
    <ArchModal :title="name" :favicon="favicon" :opened="openModal" @close="openModal = false">
      <template #body>
        <ArchSlider :name="name" :images="images" />
        <div class="portfolio-content" :style="{'--portfolio-color': color}">
          <ul v-if="links" class="links">
            <li v-for="link in links" :key="link.title">
              <a :href="link.url" target="_blank">
                <Icon :name="link.icon" />
              </a>
            </li>
          </ul>
          <hr>
          <slot />
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

<script lang="ts" setup>
import { PropType } from 'vue'

interface PortfolioLink {
  title: string
  icon: string
  url: string
}

const openModal = ref(false)

watch(openModal, (value) => {
  if (value) {
    document.body.classList.add('modal-open')
  } else {
    document.body.classList.remove('modal-open')
  }
})

defineProps({
  name: {
    type: String,
    required: true
  },
  favicon: {
    type: String,
    default: null,
    required: false
  },
  color: {
    type: String,
    default: 'var(--color-text)',
    required: false
  },
  images: {
    type: [String, Array],
    required: true
  },
  links: {
    type: Array as PropType<PortfolioLink[]>,
    required: false,
    default: null
  },
  noBorderRadius: {
    type: Boolean,
    required: false,
    default: false
  },
  category: {
    type: String,
    required: false,
    default: null
  },
  description: {
    type: String,
    required: false,
    default: null
  }
})
</script>

<style lang="scss">
.portfolio-item {
  transition: all 0.2s ease-in-out;
  position: relative;
  img {
    z-index: 3;
    position: relative;
    border-radius: var(--border-radius);
  }

  .portfolio-overly {
    &::before {
      z-index: 1;
      content: '';
      position: absolute;
      top: -4px;
      left: -4.5px;
      width: 102.5%;
      height: 103.5%;
      opacity: 0;
      background: var(--portfolio-color);
      border-radius: var(--border-radius);
    }
  }

  &:hover {
    transform: scale(0.9);
    box-shadow: 0 0 10px 3px var(--box-shadow);
    transition: all 0.2s ease-in-out;
    .portfolio-overly {
      &::before {
        opacity: 1;
      }
    }
  }
}

.portfolio-content {
  background: var(--color-light);
  border-radius: var(--border-radius);
  padding: 10px;
  z-index: 999;
  position: relative;
  margin: 20px 25px 0px 25px;

  h2,
  h3 {
    a {
      background: var(--portfolio-color);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .links {
    padding: 0;
    display: flex;
    justify-content: center;

    li {
      list-style: none;
      margin: 0px 10px;
      transition: all 0.2s ease-in-out;
      svg {
        height: 1.5rem;
        width: 1.5rem;
        color: var(--color-dark);
      }
    }
  }
}
</style>
