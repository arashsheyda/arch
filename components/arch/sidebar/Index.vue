<template>
  <aside class="info-sidebar" :class="[{ 'minimized': minimized }, minimized ? 'col-12 col-md-12 col-lg-1' : 'col-12 col-md-12 col-lg-3']">
    <div :class="{ 'sticky-sidebar': sticky }">
      <div v-if="minimizer != null" class="minimizer" @click="minimize">
        <Icon v-if="minimized" name="uil:circle" />
        <Icon v-else name="uil:compact-disc" />
      </div>
      <slot />
    </div>
  </aside>
</template>

<script lang="ts" setup>
defineProps({
  minimizer: {
    type: Boolean,
    required: false,
    default: null
  },
  sticky: {
    type: Boolean,
    default: false
  }
})

const { minimize, minimized } = useSidebar()
</script>

<style lang="scss">
.sticky-sidebar {
  position: sticky;
  top: 85px;
  z-index: 1;
}

.info-sidebar {
  .minimizer {
    position: absolute;
    top: 10px;
    right: 15px;
    z-index: 9;
    cursor: pointer;
  }

  &.minimized {
    .minimizer {
      right: 50%;
      transform: translateX(50%);
    }

    .avatar-box {
      margin-top: 20px;
      width: 50px;
      height: 50px;
      transition: all 0.3s ease;
    }

    .sidebar-name {
      font-size: 0px;
      opacity: 0;
      margin-bottom: -30px;
    }

    .badge {
      margin: 0;
      span {
        opacity: 0;
        padding: 0;
      }
    }

    .sidebar-additional-info {
      .details-info {
        li {
          &:last-child {
            padding-bottom: 0px;
          }
        }

        .details-info-item-wrapper {
          margin-left: -7px;
          padding: 10px 0px;

          .details-info-item {
            .contacts-block-detail {
              display: none;
            }

            &:hover {
              transform: none;
            }
          }

        }
      }
    }

    .socials {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 10px 0px;
    }
  }
}

@media (max-width: 767px) {
  .info-sidebar {
    margin-bottom: 30px;

    .minimizer {
      right: 15px;
    }

    &.minimized {
      .minimizer {
        top: 10px;
        right: 25px;
      }
    }

    .sidebar-additional-info {
      .details-info {
        display: flex;
        flex-wrap: wrap;

        // flex: 0 0 50%;
        .details-info-item-wrapper {
          flex: 0 0 50%;
        }

      }
    }

    .badge {
      margin-left: 15px;
    }

    &.minimized {

      .sidebar-info-header {
        margin-bottom: 0px;
      }

      .sidebar-additional-info {
        .details-info {
          justify-content: space-around;
          margin-bottom: 0px;

          .details-info-item-wrapper {
            flex: 0 0 0;
          }
        }

        .socials {
          display: flex;
        }
      }
    }
  }

}

.sidebar-info-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;

  .sidebar-name {
    color: var(--color-dark);
    opacity: 1;
    transition: all 0.2s ease;
  }

  .badge {
    margin-top: 15px;

    span {
      color: var(--color-text);
      background: var(--color-body);
      padding: 12px 10px 10px 10px;
      border-radius: var(--border-radius);
      font-size: 11px;
      transition: all 0.3s ease;
    }

    &:hover {
      color: #fff;
    }
  }

  .avatar-box {
    width: 117px;
    height: 117px;
    position: relative;
    transition: all 0.3s ease;

    img {
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      object-fit: cover;
    }

    .overly {
      position: absolute;
      z-index: 1;
      opacity: 0;
      left: 0;
      top: 0;
    }

    &:hover {
      .overly {
        opacity: 1;
      }
    }
  }

  .sidebar-name {
    margin-bottom: 0.5rem;
  }
}

.sidebar-additional-info {
  ul {
    border-top: 1px solid var(--border-color);
    padding: 15px 0px 15px 0px;
    list-style: none;

    &:last-child {
      padding: 25px 0px 0px 0px;
    }
  }

  .details-info {
    li {
      padding: 15px 0px;

      &:last-child {
        padding-bottom: 0px;
      }

      .details-info-item {
        display: flex;
        align-items: center;
        color: var(--color-dark);
        transition: all 0.3s ease;

        .icon-box {
          margin-right: 10px;
          border-radius: 7px;
          color: var(--color-primary);
          padding: 0px 10px;
          background-color: var(--color-body);
          padding: 10px 12px;
          transition: all 0.3s ease;
        }

        &:hover {
          transform: translateX(5px);
          cursor: pointer;
          text-decoration: none;
          color: var(--color-primary);
          transition: all 0.3s ease;

          .icon-box {
            box-shadow: 0 0 0 2px var(--color-primary);
            transition: all 0.3s ease;

            svg {
              filter: drop-shadow(0 0 7px var(--color-primary));
            }
          }
        }
      }
    }
  }

  .socials {
    justify-content: center;
  }
}
</style>
