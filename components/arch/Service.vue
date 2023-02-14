<template>
  <div class="col-12 col-lg-6">
    <div class="service-item">
      <div class="row">
        <Icon v-if="icon" class="service-item-icon" :name="icon" />
        <ProseImg v-if="image" class="service-item-icon" :src="image" :alt="title" />
      </div>
      <div>
        <h3 class="title title--h4">
          {{ title }}
        </h3>
        <p class="service-item-caption">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  icon?: string;
  image?: string;
  title: string;
  description: string;
}
defineProps<Props>()
</script>

<style lang="scss">
.service-item {
  --gradient-padding: 2px;
  position: relative;
  display: flex;
  text-align: center;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-direction: column;
  background: var(--color-body);
  padding: 1.875rem 1.875rem 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: 0 0 0 var(--gradient-padding) rgba($color: #EBF0F2, $alpha: 0.1);

  &:after {
    content: "";
    position: absolute;
    left: calc(-1 * var(--gradient-padding));
    top: calc(-1 * var(--gradient-padding));
    width: calc(100% + var(--gradient-padding) * 2);
    height: calc(100% + var(--gradient-padding) * 2);
    border-radius: var(--border-radius);
    background: linear-gradient(277deg, #fd004c, #fe9000, #fff020, #3edf4b, #3363ff, #b102b7, #fd004c);
    animation: animatedgradient 2s ease alternate infinite;
    background-size: 300% 300%;
    opacity: 0;
    z-index: -1;
    transition: all 0.2s ease;
  }

  .service-item-icon {
    height: 2.5rem;
    width: 2.5rem;
    margin-bottom: 1rem;
  }

  .service-item-caption {
    &:last-child {
      margin-bottom: 0;
    }
  }

  &:hover {
    &:after {
      opacity: 1;
      transition: all 0.2s ease;
    }
  }
}
</style>
