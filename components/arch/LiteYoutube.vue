<script lang="ts" setup>
import type { PropType } from 'vue'

type ImageResolution =
  | 'default'
  | 'mqdefault'
  | 'hqdefault'
  | 'sddefault'
  | 'maxresdefault'

const props = defineProps({
  announce: {
    type: String,
    required: false,
    default: 'Watch',
  },
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
    default: null,
  },
  activatedClass: {
    type: String,
    required: false,
    default: 'lyt-activated',
  },
  adNetwork: {
    type: Boolean,
    required: false,
    default: true,
  },
  iframeClass: {
    type: String,
    required: false,
    default: null,
  },
  cookie: {
    type: Boolean,
    required: false,
    default: false,
  },
  params: {
    type: String,
    required: false,
    default: '',
  },
  playerClass: {
    type: String,
    required: false,
    default: 'lty-playbtn',
  },
  playlist: {
    type: Boolean,
    required: false,
    default: false,
  },
  playlistCoverId: {
    type: String,
    required: false,
    default: '',
  },
  poster: {
    type: String as PropType<ImageResolution>,
    required: false,
    default: 'hqdefault',
  },
  wrapperClass: {
    type: String,
    required: false,
    default: 'yt-lite',
  },
  muted: {
    type: Boolean,
    required: false,
    default: false,
  },
  thumbnail: {
    type: String,
    required: false,
    default: null,
  },
  webp: {
    type: Boolean,
    required: false,
    default: false,
  },
  rel: {
    type: String as PropType<'prefetch' | 'preload'>,
    required: false,
    default: 'preload',
  },
  aspectHeight: {
    type: Number,
    required: false,
    default: 9,
  },
  aspectWidth: {
    type: Number,
    required: false,
    default: 16,
  },
})

// const preconnected = ref(false)
const iframe = ref(false)
const iframeElement = ref<HTMLIFrameElement | null>(null)

const videoId = computed(() => encodeURIComponent(props.id))
const paramsImp = computed(() => `&${props.params}` || '')
const mutedImp = computed(() => (props.muted ? '&mute=1' : ''))
const format = computed(() => (props.webp ? 'webp' : 'jpg'))
const vi = computed(() => (props.webp ? 'vi_webp' : 'vi'))
const videoPlaylistCoverId = computed(() =>
  typeof props.playlistCoverId === 'string'
    ? encodeURIComponent(props.playlistCoverId)
    : null,
)

const posterUrl = computed(() => {
  return (
    props.thumbnail
    || (!props.playlist
      ? `https://i.ytimg.com/${vi.value}/${videoId.value}/${props.poster}.${format.value}`
      : `https://i.ytimg.com/${vi.value}/${videoPlaylistCoverId.value}/${props.poster}.${format.value}`)
  )
})

const ytUrl = computed(() =>
  props.cookie
    ? 'https://www.youtube.com'
    : 'https://www.youtube-nocookie.com',
)

const iframeSrc = computed(() =>
  !props.playlist
    ? `${ytUrl.value}/embed/${videoId.value}?autoplay=1&enablejsapi=1&state=1${mutedImp.value}${paramsImp.value}`
    : `${ytUrl.value}/embed/videoseries?autoplay=1&enablejsapi=1&list=${videoId.value}${mutedImp.value}${paramsImp.value}`,
)

function addIframe() {
  if (iframe.value)
    return
  iframe.value = true
}

// function warmConnections () {
//   if (preconnected.value) { return }
//   preconnected.value = true
// }
</script>

<template>
  <div class="lite-youtube-embed" :style="{ backgroundImage: `url(${posterUrl})` }" @click="addIframe">
    <button v-if="!iframe" class="lite-youtube-embed-button" />
    <iframe
      v-if="iframe"
      ref="iframeElement"
      :src="iframeSrc"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<style lang="scss">
.lite-youtube-embed {
  background: var(--color-body);
  border-radius: var(--border-radius);
  position: relative;
  display: block;
  contain: content;
  background-position: 50%;
  background-size: cover;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba($color: #000000, $alpha: 0.0);
    transition: all 0.2s ease;
  }

  &:after {
    content: "";
    display: block;
    padding-bottom: 56.25%;
  }

  iframe {
    background: var(--color-body);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .lite-youtube-embed-button {
    width: 68px;
    height: 48px;
    position: absolute;
    transform: translate3d(-50%, -50%, 0);
    top: 50%;
    left: 50%;
    z-index: 1;
    background-color: transparent;
    /* YT's actual play button svg */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');
    filter: grayscale(100%) drop-shadow(0px 0px 0px #363636);
    transition: all 0.2s ease;
    border: none;
  }

  &:hover {
    box-shadow: (0 0 0.75rem var(--box-shadow));

    &:before {
      background: rgba($color: #000000, $alpha: 0.5);
      transition: all 0.2s ease;
    }

    .lite-youtube-embed-button {
      filter: grayscale(0%) drop-shadow(0 0 0.75rem #ff0000);
      transition: all 0.2s ease;
    }
  }
}
</style>
