<template>
  <div
    ref="ele"
    :class="{ typewriter: true, animate: show }"
    @click=toggle
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const ele = ref(null)
const show = ref(true)

const toggle = () => {
  show.value = !show.value
}

onMounted(() => {
  ele.value.addEventListener('animationend', () => {
    show.value = false
  })
})
</script>

<style lang="scss" scoped>
.typewriter {
  white-space: nowrap;
  letter-spacing: .15em;
  overflow: hidden;
  cursor: pointer;
}

.animate {
  border-right: 1rem solid #ccc;
  margin-right: -1rem;
  animation:
    typing 5.5s steps(14, end),
    blink-caret .75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  20% { width: 0 }
  60% { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #ccc; }
}
</style>
