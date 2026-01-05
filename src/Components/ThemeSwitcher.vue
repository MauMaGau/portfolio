<template>
  <toggleSwitch
    @click.prevent="switchTheme"
  >
    Switch
  </toggleSwitch>
</template>

<script setup>
import toggleSwitch from "@/Components/ToggleSwitch.vue"

const switchTheme = () => {
  document.body.classList.toggle("dark")
}
</script>
