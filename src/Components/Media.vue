<template>
  <div class="media-object">
    <flip>
      <template #front>
        <img v-if="imgFilename" :src="imgSrcUrl" :alt="imgAlt"/>
      </template>
      <template #back>
        <img v-if="imgFilename" :src="imgSrcUrl" :alt="imgAlt"/>
      </template>
    </flip>
    <div>
      <slot name="title"></slot>
      <slot name="description"></slot>
      <p v-if="description" v-html="description"></p>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import flip from '@/Components/Flip.vue'
  import Typewriter from '@/Components/Typewriter.vue'

  const props = defineProps({
    description: {
      required: false,
      type: String,
    },
    imgFilename: {
      required: false,
      type: String,
      default: '',
    },
    imgAlt: {
      required: false,
      type: String,
      default: '',
    },
  })

  const imgSrcUrl = computed(() => {
    return new URL('/' + props.imgFilename, import.meta.url).href
  })
</script>

<style lang="scss">
  .media-object {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    h5 {
      font-size: 2rem;
      font-family: "Roboto Mono", monospace;
      font-optical-sizing: auto;
      font-weight: bold;
    }

    img {
      width: 4rem;
      height: 4rem;
      object-fit: cover;
      border-radius: 9rem;
      // box-shadow: 2px 5px 5px #000;
    }
  }
</style>
