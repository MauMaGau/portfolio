<template>
  <section>
    <p class="lead blurb">Hello! I'm David. I'm a developer, designer, and collaborator. I'm passionate about building experiences that help people.
      <expander teleport-after="section:has(.blurb)">
        <template #content>
          <p>I've been making websites for over twenty-five years (grimaces slightly). I almost got kicked out of school for the first website I made, but look at me now Mr Emerson!</p>
          <p>For the last ten years I've worked on <a href="https://vestd.com">Vestd.com</a>, joining as a founding engineer and helping the baby grow into the leading equity-management platform it is today.</p>
          <p>As well as software engineering, I've spent three years as a full-time product designer, learning to love and then hate Figma. Now transitioned to a <strong>Full-Stack Design Engineer</strong>, I own big new feature projects from inception to iteration. From brief, research, ideation, prototyping, through to development, testing, deployment, and iteration.</p>
          <p>I love the breadth, ownership and autonomy of the role. I can pour the wide skillset I've developed over many years into creating products that help humans traverse complex domains with ease and delight.</p>
        </template>
      </expander>
    </p>
  </section>

  <section>
    <h2>Playground</h2>
    <article>
      <Media
        type="md"
        img-filename="particles.png"
        img-alt=""
        title="Particles"
        :view="{name: 'playground', params: {page: 'PlaygroundParticles'}}"
      >
        <template #description>
          <p>Fun with css particles</p>
          <p>
            <Pill>CSS</Pill>
            <Pill>Animation</Pill>
          </p>
        </template>
      </Media>

      <!-- <Media -->
      <!--   type="md" -->
      <!--   img-filename="eb.png" -->
      <!--   img-alt="" -->
      <!--   title="Code blocks" -->
      <!--   :view="{name: 'playground', params: {page: 'SyntaxHighlight'}}" -->
      <!-- > -->
      <!--   <template #description> -->
      <!--     <p>Fun with css particles</p> -->
      <!--     <p> -->
      <!--       <Pill>CSS</Pill> -->
      <!--       <Pill>Animation</Pill> -->
      <!--     </p> -->
      <!--   </template> -->
      <!-- </Media> -->
    </article>
  </section>
  <section>
    <h2>Projects</h2>
    <article>
      <Media
        img-filename="eb.png"
        img-alt="Screenshot of a half-finished Mars colony simulation game."
        title="Everybyway"
      >
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
        img-filename="vestd.png"
        img-alt="The glorious Vestd logo"
        title="Vestd"
      >
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
            <Pill>Design engineer</Pill>
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
        title="How to Die on Mars"
      >
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
        img-filename="lim.png"
        img-alt="An old but fun js game."
        title="Less is more"
      >
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
        title="Sticky"
      >
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
  </section>
</template>

<script setup>
import expander from '@/Components/Expander.vue'
import Media from '@/Components/Media.vue'
import Pill from '@/Components/Pill.vue'
</script>

