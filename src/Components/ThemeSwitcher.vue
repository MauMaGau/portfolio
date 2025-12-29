<template>
  <span @click="switchTheme">switch</span>
</template>
<script setup>
const switchTheme = () => {
  document.body.classList.toggle('dark')
}
</script>
<style lang="scss" scoped>
  span {
    cursor: pointer;
  }
</style>
