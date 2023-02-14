<template>
  <div class="arch-error-message" :class="{ 'centered': centered }">
    <main>
      <div class="error">
        <h1 class="gradient-text">
          <span>
            {{ code }}
          </span>
        </h1>
      </div>
      <div class="detail">
        <h2>{{ title }}</h2>
        <p>
          {{ message }}
        </p>
      </div>
    </main>
    <div class="row justify-content-center">
      <ArchButton :to="redirect">
        {{ redirectText }}
      </ArchButton>
      <ArchButton v-if="redirectBack" class="ml-5" @click="$router.back()">
        Go Back
      </ArchButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  code: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  redirectBack: {
    type: Boolean,
    default: true,
    required: false
  },
  redirectText: {
    type: String,
    default: 'Go to home',
    required: false
  },
  redirect: {
    type: String,
    default: '/',
    required: false
  },
  centered: {
    type: Boolean,
    default: true,
    required: false
  }
})
</script>

<style lang="scss">
.arch-error-message {

  &.centered {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-45%, -50%);
  }

  main {
    display: flex;

    .error {
      padding-right: 20px;
      margin: auto;
    }

    .detail {
      border-left: 1px solid var(--border-color);
      padding-left: 20px;
    }
  }

  a {
    display: block;
    text-align: center;
  }
}
</style>
