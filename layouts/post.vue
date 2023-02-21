<script lang="ts" setup>
const { page } = useContent()

const settings = useSettings()

const route = useRoute()

const [prev, next] = await queryContent()
  .only(['_path', 'title'])
  .sort({ date: 1 })
  .findSurround(route.path)

onMounted(() => {
  const tocItems = document.querySelectorAll('.toc-item')

  function updateActivTocItem() {
    const fromTop = window.scrollY
    tocItems.forEach((link: any) => {
      const section = document.querySelector(link.hash)
      link.classList.toggle('active', section && section.offsetTop - 70 <= fromTop)
    })
  }

  window.addEventListener('scroll', updateActivTocItem)
})
</script>

<template>
  <div class="row">
    <div class="col-12 col-md-12 col-lg-9">
      <div id="box-content" class="box box-content col-12">
        <div class="ml-2 navigation">
          <ul>
            <li>
              <NuxtLink href="/">
                Home
              </NuxtLink>
              <Icon name="tabler:chevron-right" />
            </li>
            <li>
              <NuxtLink href="/blog">
                Blog
              </NuxtLink>
              <Icon name="tabler:chevron-right" />
            </li>
            <li>
              <span>{{ page.title }}</span>
            </li>
          </ul>
        </div>
        <div class="article-content">
          <header class="header-post">
            <h1>{{ page.title }}</h1>
            <div v-if="page.description" class="caption-post">
              <p>{{ page.description }}</p>
            </div>
            <div v-if="page.image" class="header-post__image-wrap">
              <ProseImg class="cover" :src="page.image" :alt="page.title" :zoomable="true" />
            </div>
          </header>
          <hr>
          <slot />
        </div>
        <div class="footer-post">
          <div class="col-4 text-left" />
          <div class="col-4">
            <ArchSocials />
          </div>
          <div class="col-4 text-right" />
        </div>
        <ArchFooter />
      </div>
    </div>

    <ArchSidebar :sticky="true">
      <div class="toc-wrapper">
        <ArchTocBox v-if="page.body.toc.links.length" name="Table of Contents" icon="uil:list-ui-alt">
          <ul>
            <ArchTocItem v-for="link in page.body.toc.links" :key="link.id" :toc="link" />
          </ul>
        </ArchTocBox>

        <ArchTocBox name="Options" icon="uil:setting" icon-class="icon-settings">
          <ArchArticleOptions />
        </ArchTocBox>

        <ArchTocBox name="Navigation" icon="uil:list-ul">
          <ArchArticleNavigation :prev="prev" :next="next" />
        </ArchTocBox>
      </div>
    </ArchSidebar>
  </div>
</template>

<style lang="scss">
.icon-settings {
  animation: rotate 2s linear infinite;
}

.article-content {
  --arch-font-size: v-bind(settings.font.size);
  --arch-font-color: v-bind(settings.font.color);
  --arch-font-family: v-bind(settings.font.family);

  h1 {
    text-align: start;
    background: -webkit-linear-gradient(45deg, var(--color-secondary), var(--color-primary));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    transition: all 0.3s ease;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      background: -webkit-linear-gradient(45deg, var(--color-secondary), var(--color-primary));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;
      transition: all 0.3s ease;
    }

    &:hover {
      a {
        filter: drop-shadow(0 0 7px var(--color-secondary));
        transition: all 0.3s ease;
      }
    }
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.7rem;
  }

  p {
    color: var(--arch-font-color);
    font-size: var(--arch-font-size);
    font-family: var(--arch-font-family);
  }

}

.navigation {
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    color: var(--color-secondary);

    li {
      margin-right: 5px;
      position: relative;
      color: var(--color-dark);

      svg {
        margin-left: 5px;
        color: var(--color-dark);
      }

      a {
        color: var(--color-dark);
        position: relative;

      }

      &:hover {
        a {
          color: var(--color-primary);
          text-decoration: none;
        }
      }

    }
  }
}

.toc-wrapper {
  .box {
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: var(--color-secondary);

    li {
      margin-bottom: 5px;
      position: relative;
      color: var(--color-dark);

      a {
        color: var(--color-dark);

        &.active {
          color: var(--color-primary);
          text-shadow: 0 0 7px var(--color-primary);
        }
      }

      .toc-item {
        &.h-2 {
          font-weight: bold;
        }
      }

      .toc-item {
        &.h-3 {
          margin-left: 10px;
        }
      }
    }
  }
}

.header-post {
  margin-top: 1rem;
  text-align: center;
}

.header-post__image-wrap {
  height: 28.125rem;
  margin-bottom: 2.125rem;
}

@media only screen and (max-width: 580px) {
  .header-post__image-wrap {
    height: 20rem;
    margin-bottom: 1.5rem;
  }
}

.caption-post {
  text-align: start;
  margin-bottom: 1.75rem;
  width: 86%;
}

@media only screen and (max-width: 991px) {
  .caption-post {
    width: 100%;
  }
}

@media only screen and (max-width: 580px) {
  .caption-post {
    margin-bottom: 1.1875rem;
  }
}

.gallery-post {
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;
}

.gallery-post>* {
  min-width: 0;
}

@media only screen and (max-width: 580px) {
  .gallery-post {
    margin-left: 0;
    margin-right: 0;
  }
}

.gallery-post__item {
  flex: calc(50% - 2rem);
  margin-left: 1rem;
  margin-right: 1rem;
  width: calc(50% - 2rem);
}

@media only screen and (max-width: 768px) {
  .gallery-post__item {
    flex: calc(50% - 1.25rem);
    margin-left: 0.625rem;
    margin-right: 0.625rem;
    width: calc(50% - 1.25rem);
  }
}

@media only screen and (max-width: 580px) {
  .gallery-post__item {
    flex: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 1rem;
    width: 100%;
  }
}

.footer-post {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 70px;
  margin-top: 2rem;
  padding-top: 2rem;
  position: relative;
}

.footer-post>* {
  min-width: 0;
}

@media only screen and (max-width: 580px) {
  .footer-post {
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding-top: 1.5rem;
  }
}

.footer-post::before {
  content: '';
  background-color: var(--color-text);
  height: 1px;
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 15%;
}
</style>
