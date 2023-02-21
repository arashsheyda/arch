<script lang="ts" setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="article-item">
    <NuxtLink class="article-item-link" :to="item._path">
      <div class="article-item-image-wrap overlay">
        <Icon name="tabler:news" class="overlay-icon" />
        <div v-if="item.date" class="article-item-date">
          {{ new Date(item.date).getDate() }}
          <span>
            {{ new Date(item.date).toLocaleString('default', { month: 'short' }) }}
            {{ new Date(item.date).getFullYear() }}
          </span>
        </div>
        <ProseImg :src="item.image" :alt="item.title" />
      </div>
    </NuxtLink>
    <div class="article-item-caption">
      <div class="article-tags">
        <span v-for="tag in item.tags" :key="tag">
          <Icon :name="tag" />
        </span>
      </div>
      <h2 class="title title--h4">
        <NuxtLink :to="item._path">
          {{ item.title }}
        </NuxtLink>
      </h2>
      <p>{{ item.description }}</p>
    </div>
  </article>
</template>

<style lang="scss">
h2 {
  a {
    color: var(--color-dark);

    &:hover {
      color: var(--color-primary);
    }
  }
}

.article-tags {
  margin-bottom: 10px;

  span {
    margin-right: 10px;

    svg {
      transition: all 0.3s ease;
      height: 20px;
      width: 20px;
    }

    &:hover {
      cursor: pointer;

      svg {
        transform: translateY(-7px);
        transition: all 0.3s ease;
      }
    }
  }
}

.tag-item {
  padding: 0px 10px;

  &.active {
    padding-bottom: 5px;
    border-bottom: 2px solid #00c7c7;
  }
}

.article-item {
  margin-bottom: 1.875rem;
  margin-left: 0.9375rem;
  margin-right: 0.9375rem;
  width: calc(50% - 30px);
  background: var(--color-body);
  border-radius: var(--border-radius);
  box-shadow: 0 0px 13px var(--box-shadow);
  transition: all 0.4s ease-in-out;

  .article-item-image-wrap {
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 10px 10px 0px 0px;
    }

    &::before {
      opacity: 0;
      backdrop-filter: blur(3px);
      border-radius: 10px 10px 0px 0px;
      background: rgba($color: #000000, $alpha: 0.5);
      transition: opacity 0.4s ease-in-out;
    }

    .overlay-icon {
      opacity: 0;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 4rem;
      height: 4rem;
      margin: auto;
      z-index: 99999;
      color: #ffffff;
      position: absolute;
      pointer-events: none;
      transition: opacity 0.4s ease-in-out;
    }

  }

  .article-item-date {
    position: absolute;
    z-index: 2;
    top: 0;
    background: var(--color-primary);
    color: #ffffff;
    border-radius: 10px 0 10px 0;
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 1.3;
    padding: 5px 10px;
    text-align: center;

    span {
      font-size: 0.8125rem;
      font-weight: 400;
      display: block;
    }
  }

  .article-item-caption {
    padding: 1.5rem 1.5rem 0.5rem;
  }

  p {
    line-height: 1.5;
  }

  &:hover {
    box-shadow: 0 0 37px var(--box-shadow);

    .article-item-image-wrap {

      &::before,
      .overlay-icon {
        opacity: 1;
      }
    }
  }
}

@media only screen and (max-width: 991px) {
  .article-item-image-wrap {
    height: 18rem;
  }
}

@media only screen and (max-width: 580px) {
  .article-item {
    margin-bottom: 1.25rem;

    p {
      font-size: 0.875rem;
    }
  }

  .article-item-image-wrap {
    height: 12rem;
  }

  .article-item-date {
    font-size: 1.125rem;
    line-height: 1.2;
    padding: 0.5625rem 1rem;
  }

  .article-item-date span {
    font-size: 0.625rem;
  }

  .article-item-caption {
    padding: 1.1875rem 1rem 0;
  }
}

.list {
  .article-item {
    width: 100%;
    display: flex;

    .article-item-caption {
      width: 100%;
    }

    .article-item-link {
      width: 70%;

      .article-item-image-wrap {
        width: 100%;
        height: 100%;

        img {

          border-radius: 10px 0px 0px 10px;
        }
      }
    }
  }
}
</style>
