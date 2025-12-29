<template>
  <div
    :class="{flip, flipping: flipping}"
    @click="flip"
  >
    <div class="front">
      <slot name="front"></slot>
    </div>
    <div class="back">
      <slot name="back"></slot>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const flipping = ref(false)

  const flip = () => {
    flipping.value = true
    setTimeout(() => {
      flipping.value = false
    }, 3000);
  }
</script>
<style lang="scss">
  .flip {
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      transform: rotateY(40deg);
    }

    &.flipping {
      animation: flip 3s ease-out forwards;
    }
    > div {
      width: 100%;
      height: 100%;
    }
    .front {
      backface-visibility: hidden;
    }
    .back {
      transform: rotateY(-180deg);
      backface-visibility: hidden;
      position: absolute;
    }

    @keyframes flip {
      from { transform: rotateY(0); }
      to { transform: rotateY(1800deg); }
    }
  }
</style>
