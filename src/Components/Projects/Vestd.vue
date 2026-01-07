<template>
  <section>
    <h2>Vestd</h2>
    <p class="lead">The go-to platform for share schemes, equity management, shareholder governance and funding round execution.</p>
    <p>
      <Pill>Software engineer</Pill>
      <Pill>Product designer</Pill>
      <Pill>Design engineer</Pill>
      <Pill>PHP</Pill>
      <Pill>Laravel</Pill>
      <Pill>Vue</Pill>
      <Pill>Career</Pill>
    </p>

    <article>
      <div>
        <p>When SpookStudio, the design agency I worked for brought Vestd on as a client, it was just another project.</p>
        <p>I was excited to use Laravel and Angular for the first time (this was ten years ago), but I had no idea this would be my last project at SpookStudio, and the beginning of a decade-long relationship with Vestd.</p>
        <p>During that time I've:</p>
        <ul>
          <li>Co-authored the back-end systems that power an FCA-regulated app within a complex business domain.</li>
          <li>Worked with designers and independently to create front-end systems that are delightful and scaleable.</li>
          <li>Helped with a myriad of unconventional projects. At times leading business-wide projects such as a CRM integration and IT support, as well stepping into customer service when needed.</li>
          <li>Helped create the Product team, starting as the founding product designer.</li>
          <li>Created a bespoke and powerful design system.</li>
          <li>Led designer education.</li>
          <li>Structured design processes, tightly integrated with wider product and engineering flows.</li>
          <li>Pulled all my experience together into my new role as a full-stack design engineer.</li>
        </ul>
        <p>Woosh. That's a lot. There's so much detail I could go into. If you'd like to know more just reach out. I'd be happy to walk through a few case studies.</p>


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
