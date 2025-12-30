<template>
  <div class="header">
    <p>
      <ThemeSwitcher></ThemeSwitcher>
    </p>
    <Router-link
      v-if="$route.name !== 'home'"
      :to="{name: 'home'}"
    >Home</Router-link>
  </div>
  <Media
    img-filename="face.png"
    img-alt="8-bit avatar of David (better looking than original)."
  >
    <template #title>
      <Typewriter>
        <h1>David Townsend</h1>
      </Typewriter>
    </template>
    <template #description>
      <p class="lead">Full stack design engineer</p>
    </template>
  </Media>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
  import Media from '@/Components/Media.vue'
  import Typewriter from '@/Components/Typewriter.vue'
  import ThemeSwitcher from '@/Components/ThemeSwitcher.vue'
</script>

<style>
.header {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
</style>
