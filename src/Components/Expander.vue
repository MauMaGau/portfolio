<template>
  <a
    href="#"
    @click="toggle"
    v-html="!show? cta : 'Read less'"
  ></a>
  <transition>
    <div class="expander-container" v-show="show">
      <div></div>
      <section>
        <slot name="content"></slot>
      </section>
    </div>
  </transition>
</template>
<script setup>
  import {ref} from 'vue'
  const show = ref(false)
  defineProps({
    cta: {
      type: String,
      required: false,
      default: 'Read more',
    }
  })

  const toggle = () => {
    show.value = !show.value
  }
</script>

<style lang="scss" scoped>
.expander-container {
  display: grid;
  grid-template-rows: min-content 1fr;
  margin-top: 1rem;
}
section {
  overflow: hidden;
}
.v-enter-active,
.v-leave-active {
  transition:
    opacity 2.5s ease,
    grid-template-rows .5s;
}

.v-enter-from,
.v-leave-to {
  grid-template-rows: min-content 0fr;
}
</style>
