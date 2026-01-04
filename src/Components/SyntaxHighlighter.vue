<template>
  <div
    :class="{expanded: !expandable || expanded}"
    v-html="html"
    @click="expanded = !expanded"
  ></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import {codeToHtml} from 'shiki'

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  expandable: {
    type: Boolean,
    required: false,
    default: true,
  }
})

const html = ref('')
const expanded = ref(false)

onMounted(async () => {
  html.value = await codeToHtml(props.code, {lang: 'vue', theme: 'monokai'})
})
</script>

<style lang="scss" scoped>
  div {
    max-height: 6rem;
    overflow: hidden;
    cursor: pointer;
    mask-image: linear-gradient(180deg, transparent, #000 60%,transparent);

    .expanded {
      max-height: inherit;
      mask-image: none;
    }
  }
</style>
