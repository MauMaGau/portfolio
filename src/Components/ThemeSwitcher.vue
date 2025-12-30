<template>
  <toggleSwitch
    @click="switchTheme"
  >
    Switch
  </toggleSwitch>
</template>

<script setup>
import toggleSwitch from "@/Components/ToggleSwitch.vue"

const switchTheme = () => {
  document.body.classList.add("dark")
  console.log(document.body.classList)
}
</script>
