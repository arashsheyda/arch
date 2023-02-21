<script lang="ts" setup>
interface Props {
  name: string
  icon?: string
  description?: string
  flex?: boolean
  skills?: boolean
}

defineProps<Props>()

const minimized = ref(false)
</script>

<template>
  <div class="row">
    <div class="resume-list col-12">
      <h2 class="title title--h3">
        <Icon v-if="icon" class="resume-icon" :name="icon" />
        {{ name }}
      </h2>

      <div class="resume-items" :class="[flex ? 'row' : 'timeline', { minimized }, { 'row skills box box__border': skills }]">
        <slot />
      </div>

      <div class="minimizer" @click="minimized = !minimized">
        <Icon v-if="minimized" name="uil:circle" />
        <Icon v-else name="uil:compact-disc" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.timeline {
  margin-top: 1.75rem;
  padding-left: 0.5rem;
}

@media only screen and (max-width: 580px) {
  .timeline {
    margin-top: 1.5rem;
  }
}

.timeline__item {
  border-left-width: 1px;
  border-left-style: solid;
  border-color: #EBF0F2;
  padding-bottom: 0.5625rem;
  padding-left: 1.375rem;
  position: relative;
}

.timeline__item::before {
  content: '';
  background-color: var(--color-primary);
  box-shadow: 0 0 0 0.1875rem rgba(1, 94, 234, 0.3);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: -0.3125rem;
  height: 0.625rem;
  width: 0.625rem;
}

.timeline__item:last-child {
  border: 0;
}

.timeline__title {
  margin-bottom: 0;
  position: relative;
  top: -0.3125rem;

  svg {
    margin-right: 5px;
    transform: translateY(-1px);
  }
}

.timeline__period {
  color: rgba(94, 110, 128, 0.8);
  font-size: 0.875rem;
}

.timeline__description {
  margin-top: 0.5rem;
}

@media only screen and (max-width: 580px) {
  .timeline__description {
    margin-top: 0.1875rem;
  }
}

/* Progress  */
.progress {
  background-color: #F7F9FA;
  border-radius: 1rem;
  height: 1.5rem;
  margin-bottom: 1.5rem;
  overflow: inherit;
  position: relative;
  text-align: right;
}

@media only screen and (max-width: 580px) {
  .progress {
    margin-bottom: 0.75rem;
    height: 1.375rem;
  }
}

.progress:last-child {
  margin-bottom: 0;
}

.progress-bar {
  background-image: linear-gradient(142.17deg, #3086FF 6.66%, #304CFD 91.48%);
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  width: 0%;
  z-index: 1;
}

.progress .progress-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-left: 0.8125rem;
  padding-right: 0.8125rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.progress .progress-text>* {
  min-width: 0;
}

@media screen and (-ms-high-contrast: active),
(-ms-high-contrast: none) {
  .progress-text span:nth-child(2) {
    float: right;
  }
}

.resume-icon {
  color: var(--color-primary);
  transform: translate(-5px, -2px);
}

.resume-list {
  .minimizer {
    position: absolute;
    right: 15px;
    top: 5px;
    cursor: pointer;
  }

  .resume-items {

    &.skills {
      margin-bottom: 25px;
      display: flex;
      justify-content: center;
    }

    &.minimized {
      &.resume-items {
        display: none;
      }
    }
  }

}
</style>
