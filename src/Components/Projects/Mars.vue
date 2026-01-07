<template>
  <section>
    <h2>How to Die on Mars</h2>
    <p class="lead">C#/Unity colony survival game diving deep into elegant OOP.</p>
    <p>
      <Pill>Personal project</Pill>
      <Pill>C#</Pill>
      <Pill>Indie game</Pill>
      <Pill>Big project</Pill>
      <Pill>OOP</Pill>
    </p>

    <article>
      <div>
      </div>
    </article>
  </section>
</template>

<script setup>
import Pill from '@/Components/Pill.vue'

const imgSrcUrl = (imgFilename) => {
  return new URL('/' + imgFilename, import.meta.url).href
}

</script>

<style lang="scss" scoped>
img {
  max-width:100%;
  max-height: 40rem;
  margin-block:2rem;
  border: 3px solid rgba(255, 255, 255, .3);
  border-radius: 1rem;
  box-shadow: 1rem 1rem 1rem .1rem rgba(0, 0, 0, .5)
}

p:has(img) {
  display: flex;
  justify-content: center;
}
</style>
