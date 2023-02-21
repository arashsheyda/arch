<script lang="ts" setup>
defineProps({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <blockquote class="block-quote">
    <p>{{ content }}</p>
    <span class="block-quote-author">{{ author }}</span>
  </blockquote>
</template>

<style lang="scss">
.block-quote {
  font-size: 1.25rem;
  font-weight: 400;
  font-style: italic;
  margin: 20px 50px;
  position: relative;
  line-height: 1.6;

  &::before {
    // background-image: url(/assets/icons/icon-quote.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    content: '';
    height: 2.125rem;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: -3.375rem;
    width: 2.125rem;
  }

  .block-quote-author {
    font-size: 0.875rem;
    font-style: normal;
    display: block;
    margin-top: 0.625rem;
    padding-left: 3rem;
    position: relative;

    &::before {
      content: '';
      background-color: #5E6E80;
      height: 1px;
      margin-bottom: auto;
      margin-top: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 2rem;
    }
  }
}

@media only screen and (max-width: 991px) {
  .block-quote {
    padding-left: 3.75rem;

    &::before {
      left: 0;
    }
  }
}

@media only screen and (max-width: 580px) {
  .block-quote {
    font-size: 1.125rem;
    margin: 0.625rem 0 1.25rem;
    padding-left: 0;
    padding-top: 2.5rem;

    &::before {
      right: 0;
    }

    .block-quote-author {
      font-size: 0.875rem;
      margin-top: 0;
      padding-left: 2rem;

      &::before {
        width: 1rem;
      }
    }
  }
}
</style>
