<template>
  <p>
    <ThemeSwitcher></ThemeSwitcher>
  </p>
  <Media
    description="Full stack design engineer"
    img-filename="face.png"
    img-alt="8-bit avatar of David (better looking than original)."
  >
    <template #title>
      <Typewriter>
        <h5>David Townsend</h5>
      </Typewriter>
    </template>
  </Media>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
  import Media from '@/Components/Media.vue'
  import Typewriter from '@/Components/Typewriter.vue'
  import ThemeSwitcher from '@/Components/ThemeSwitcher.vue'
</script>

<style scoped></style>
