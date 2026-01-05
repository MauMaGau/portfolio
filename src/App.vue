<template>
  <div class="nav">
    <p>
      <ThemeSwitcher></ThemeSwitcher>
    </p>
    <Router-link
      v-if="$route.name !== 'home'"
      :to="{name: 'home'}"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="216" y1="128" x2="40" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><polyline points="112 56 40 128 112 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </Router-link>
  </div>
  <div class="header">
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
  </div>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import Media from '@/Components/Media.vue'
import Typewriter from '@/Components/Typewriter.vue'
import ThemeSwitcher from '@/Components/ThemeSwitcher.vue'
</script>

<style lang="scss">
.nav {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;


  svg {
    width:1.5rem;
    height:1.5rem;
    vertical-align: middle;
    stroke-width: 30;
  }

  a:hover svg {
    transition: all 1s;
    transform: rotateX(180deg);
  }

  a {
    padding-block: 1.5rem;
    margin-block: -1.5rem;
    padding-inline: 2.5rem;
    margin-inline: -2.5rem;
    text-decoration: none;
    color: var(--color-txt-mid-contrast);
    &:active, &:hover, &:focus {
      color: var(--color-a-hover);
      text-decoration: underline;
    }
  }
}

.header {
  margin-bottom: 2rem;
}

</style>
