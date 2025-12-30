<template>
  <div
    @click="navigate"
    :class="['media-object', type, {'has-view': view}]"
  >
    <flip @click.stop>
      <template #front>
        <img v-if="imgFilename" :src="imgSrcUrl" :alt="imgAlt"/>
      </template>
      <template #back>
        <img v-if="imgFilename" :src="imgSrcUrl" :alt="imgAlt"/>
      </template>
    </flip>
    <div>
      <h5 v-if="title" v-html="title"></h5>
      <slot v-else name="title"></slot>
      <slot name="description"></slot>
      <p v-if="description" v-html="description"></p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import router from '@/router'
import flip from '@/Components/Flip.vue'
import Typewriter from '@/Components/Typewriter.vue'

const props = defineProps({
  type: {
    required: false,
    type: String,
    default: 'lg',
  },
  title: {
    required: false,
    type: String,
  },
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
  view: {
    required: false,
    type: Object,
    default: null,
  },
})

const imgSrcUrl = computed(() => {
  return new URL('/' + props.imgFilename, import.meta.url).href
})

const navigate = () => {
  if (props.view) {
    router.push(props.view)
  }
}
</script>

<style lang="scss" scoped>
.media-object {
  padding-block: .5rem;
  margin-block: .5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &.md {
    width: 50%;
    min-width: 200px;
  }

  &.has-view {
    cursor: pointer;
    &:hover {
      background-color: var(--color-a-hover-block);
      margin-inline: -.5rem;
      padding-inline: .5rem;
      border-radius: .5rem;
    }
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
