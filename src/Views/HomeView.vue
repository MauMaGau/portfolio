<template>
  <article>
    <p class="lead">Hello! I'm David. I'm a developer, designer, and collaborator. I'm passionate about building experiences that help people.
    </p>
      <expander>
        <template #content>
          <p>I've been making websites for (grimaces slightly) over twenty-five years. I almost got kicked out of school for the first site I made. But look at me now Mr Emerson!</p>
          <p>For the last ten years I've worked on <a href="https://vestd.com">Vestd.com</a>, joining as a founding engineer and helping the baby grow into the leading equity-management platform it is today.</p>
          <p>As well as software engineering, I've spent three years as a full-time product designer (learning to love and then hate Figma). Now transitioned to a <strong>Full-Stack Design Engineer</strong> I own big new-feature projects from inception to iteration. From brief, research, ideation, prototyping, through to development, testing, deployment, and iteration.</p>
          <p>I love the breadth, ownership and autonomy of the role. I can pour the wide skillset I've developed over many years to create products that help humans traverse complex domains without having to think.</p>
        </template>
      </expander>
  </article>
  <article>
    <h2>Projects</h2>
    <Media
      img-filename="vestd.png"
      img-alt="The glorious Vestd logo"
    >
      <template #title>
        <h5>Vestd</h5>
      </template>
      <template #description>
        <p>The go-to platform for share schemes, equity management, shareholder governance and funding round execution. FCA-authorised, B-Corp and ISO 27001 certified.</p>
        <p>
          <a href="https://vestd.com" target="_blank">
            Vestd.com
          </a>
        </p>
        <p>
          <Pill>Software engineer</Pill>
          <Pill>Product designer</Pill>
          <Pill>Full stack design engineer</Pill>
          <Pill>PHP</Pill>
          <Pill>Laravel</Pill>
          <Pill>Vue</Pill>
          <Pill>Career</Pill>
        </p>
      </template>
    </Media>
    <Media
      img-filename="th6.jpg"
      img-alt="Screenshot of a half-finished Mars colony simulation game."
    >
      <template #title>
        <h5>TH6 - How to Die on Mars</h5>
      </template>
      <template #description>
        <p>C#/Unity colony survival game diving deep into elegant OOP.</p>
        <p>
          <a href="https://github.com/MauMaGau/TH6.1" target="_blank">
            Source code
          </a>
        </p>
        <p>
          <Pill>Personal project</Pill>
          <Pill>C#</Pill>
          <Pill>Indie game</Pill>
          <Pill>Big project</Pill>
          <Pill>OOP</Pill>
        </p>
      </template>
    </Media>
    <Media
      img-filename="eb.png"
      img-alt="Screenshot of a half-finished Mars colony simulation game."
    >
      <template #title>
        <h5>Everybyway.com</h5>
      </template>
      <template #description>
        <p>A journey tracking android app and companion website.</p>
        <p>
          <a href="https://everybyway.com" target="_blank">
            everybyway.com
          </a>
        </p>
        <p>
          <Pill>Personal project</Pill>
          <Pill>JS</Pill>
          <Pill>PHP8</Pill>
          <Pill>Livewire</Pill>
          <Pill>Kotlin</Pill>
          <Pill>Big project</Pill>
        </p>
      </template>
    </Media>

    <Media
      img-filename="lim.png"
      img-alt="An old but fun js game."
    >
      <template #title>
        <h5>Less is more</h5>
      </template>
      <template #description>
        <p>A weekend hackathon game written in pure js.</p>
        <p>
          <a href="https://maumagau.github.io" target="_blank">
            Play it!
          </a>
        </p>
        <p>
          <Pill>Personal project</Pill>
          <Pill>Pure JS</Pill>
          <Pill>Small project</Pill>
        </p>
      </template>
    </Media>

    <Media
      img-filename="sticky.png"
      img-alt="Miro, but before miro, and worser"
    >
      <template #title>
        <h5>Sticky</h5>
      </template>
      <template #description>
        <p>A personal last hoorah to jQuery.</p>
        <p>
          <a href="https://github.com/MauMaGau/sticky.js/blob/master/public/js/app.js" target="_blank">
            Source code
          </a>
        </p>
        <p>
          <Pill>Personal project</Pill>
          <Pill>jQuery</Pill>
          <Pill>Small project</Pill>
        </p>
      </template>
    </Media>
  </article>
</template>

<script setup>
  import expander from '@/Components/Expander.vue'
  import Media from '@/Components/Media.vue'
  import Pill from '@/Components/Pill.vue'
</script>
