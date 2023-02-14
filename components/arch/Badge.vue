<template>
  <span class="badge" :class="[`badge-${type}`]">New</span>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { Variants } from '../../types/variants'

defineProps({
  type: {
    type: String as PropType<Variants>,
    required: false,
    default: 'primary'
  }
})
</script>

<style lang="scss">
.badge {
  line-height: 1;
  font-weight: 700;
  text-align: center;
  padding: 10px 15px;
  white-space: nowrap;
  display: inline-block;
  vertical-align: baseline;
  border-radius: var(--border-radius);

  &:empty {
    display: none
  }

  &.badge-primary {
    color: #fff;
    background-color: var(--color-primary);
  }

  &.badge-secondary {
    color: #fff;
    background-color: var(--color-secondary);
  }
}

a.badge:focus,
a.badge:hover {
  text-decoration: none
}

.btn .badge {
  position: relative;
  top: -1px
}

.badge-pill {
  padding-right: .6em;
  padding-left: .6em;
  border-radius: 10rem
}

a.badge-primary:focus,
a.badge-primary:hover {
  color: #fff;
  background-color: #0062cc
}

a.badge-primary.focus,
a.badge-primary:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .5)
}

a.badge-secondary:focus,
a.badge-secondary:hover {
  color: #fff;
  background-color: #545b62
}

a.badge-secondary.focus,
a.badge-secondary:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(108, 117, 125, .5)
}

.badge-success {
  color: #fff;
  background-color: #28a745
}

a.badge-success:focus,
a.badge-success:hover {
  color: #fff;
  background-color: #1e7e34
}

a.badge-success.focus,
a.badge-success:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .5)
}

.badge-info {
  color: #fff;
  background-color: #17a2b8
}

a.badge-info:focus,
a.badge-info:hover {
  color: #fff;
  background-color: #117a8b
}

a.badge-info.focus,
a.badge-info:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(23, 162, 184, .5)
}

.badge-warning {
  color: #212529;
  background-color: #ffc107
}

a.badge-warning:focus,
a.badge-warning:hover {
  color: #212529;
  background-color: #d39e00
}

a.badge-warning.focus,
a.badge-warning:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(255, 193, 7, .5)
}

.badge-danger {
  color: #fff;
  background-color: #dc3545
}

a.badge-danger:focus,
a.badge-danger:hover {
  color: #fff;
  background-color: #bd2130
}

a.badge-danger.focus,
a.badge-danger:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .5)
}

.badge-light {
  color: #212529;
  background-color: #f8f9fa
}

a.badge-light:focus,
a.badge-light:hover {
  color: #212529;
  background-color: #dae0e5
}

a.badge-light.focus,
a.badge-light:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(248, 249, 250, .5)
}

.badge-dark {
  color: #fff;
  background-color: #343a40
}

a.badge-dark:focus,
a.badge-dark:hover {
  color: #fff;
  background-color: #1d2124
}

a.badge-dark.focus,
a.badge-dark:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(52, 58, 64, .5)
}
</style>
