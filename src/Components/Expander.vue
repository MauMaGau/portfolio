<template>
  <a
    href="#"
    class="expander-toggle"
    @click="toggle"
  >
    <template v-if="!show">
      More...
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="56 144 128 216 200 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
    </template>
    <template v-else="show">
      <span class='read-less'>
        Less...
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="56 144 128 216 200 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
      </span>
    </template>
  </a>
  <Teleport defer :to="teleportAfter">
    <transition>
      <div class="expander-container" v-show="show">
        <div></div>
        <article>
          <slot name="content"></slot>
        </article>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import {ref} from 'vue'

const show = ref(false)

defineProps({
  cta: {
    type: String,
    required: false,
    default: 'Read more',
  },
  teleportAfter: {
    type: String,
    required: true,
  }
})

const toggle = () => {
  show.value = !show.value
}
</script>

<style lang="scss">
.expander-toggle {
  svg {
    width:1rem;
    height:1rem;
    vertical-align: middle;
  }

  svg {
    animation: rotate 1s ease-out reverse;
  }

  .read-less svg {
    animation: rotate 1s ease-out;
    transform: rotateX(180deg);
  }

  @keyframes rotate {
  from { transform: rotateX(0); }
  to { transform: rotateX(180deg); }
  }
}

.expander-container {
  display: grid;
  grid-template-rows: min-content 1fr;
  position: relative;

  article {
    box-sizing: border-box;
    overflow: hidden;
    scrollbar-width: 0;
    margin-bottom: 1rem;
    padding: 2rem;
    border-radius: 0 1rem 1rem 1rem;
    background-color: var(--color-section-bg);


    p {
      margin-bottom: 1.25rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  div:before {
    display: block;
    content: "\a0";
    position: absolute;
    inset-block-start: 2.1rem;
    inset-inline-start: -1.5rem;
    width: 3rem;
    height: 3rem;
    background-color: var(--color-section-bg);
    transform: rotateZ(45deg);
  }

  &.v-enter-active,
  &.v-leave-active {
    // overflow: hidden;
    transition:
      opacity 1.5s ease,
      grid-template-rows 1.5s ease;
  }

  &.v-enter-from,
  &.v-leave-to {
    // overflow: hidden;
    grid-template-rows: min-content 0fr;
    opacity: 0;
  }
}
</style>
