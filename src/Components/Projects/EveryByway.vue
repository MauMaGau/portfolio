<template>
  <section>
    <h5>EveryByway</h5>
    <p class="lead">A journey tracking android app and companion website.</p>
    <p>
      <Pill>Personal project</Pill>
      <Pill>JS</Pill>
      <Pill>PHP8</Pill>
      <Pill>Livewire</Pill>
      <Pill>Kotlin</Pill>
      <Pill>Big project</Pill>
    </p>

    <article>
      <div>
        <p>At the start of 2024 I wanted to get back into some complex engineering, and do something cool.</p>
        <p>I'm a mad motorbiker, and when the mood takes me I'll head out for a ride with no destination. Just a bimble around the area for an hour or two.</p>
        <p>Following my nose.</p>
        <p>Sometimes I stumble on a beautful road (a common occurence anywhere near Wales). But being brought up on GPS maps, my hippocampus lacks the neurons to remember where I went.</p>
        <p>And so I spent a weekend, a little personal hackathon, putting together a gps tracking site.</p>
        <p>Just the simplest UX for recording a journey, and viewing it afterwards.</p>
        <p>The 'mvp' was functional by Sunday evening:</p>
        <p>
          <img :src="imgSrcUrl('eb1.jpg')" />
        </p>
        <p>It used an <a href="https://f-droid.org/en/packages/com.mendhak.gpslogger/" target="_blank">opensource app</a> on my phone to send my location through api requests to a server I'd thrown up. The server digested the requests, stored them to a db, and presented a map with all the positions it had stored.</p>
        <p>Then I spent two more years finishing it off.</p>
        <p>I learnt Kotlin and Android development to build my own app.</p>
        <p>I learnt livewire and tailwind to improve the website.</p>
        <p>
          <img :src="imgSrcUrl('eb3.png')" />
        </p>
        <p>I recruited friends and fellow bikers to test the system and provide feedback.</p>
        <p>It's now very near to a full release on the Android app store.</p>
        <p>I've taken a break from development over the winter, but I'm super excited to focus on it in the near future and celebrate it's release.</p>
        <p>But in the meantime, you can see all my journeys on the bike at <a href="https://everybyway.com" target="_blank">everybyway.com</a>.</p>
      </div>
    </article>
  </section>
</template>

<script setup>
import { computed } from 'vue'
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
