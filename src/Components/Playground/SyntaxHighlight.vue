<template>
  <p>I need to show code here, something I haven't needed in my other projects.</p>
  <p>I'd like clear syntax highlighting, and the simplest input - as little friction to adding code snippets as possible.</p>
  <p>This is definitely a solved problem, so let's look for a suitable plugin.</p>
  <p>Some time later...</p>
  <p>Hmm. I'm struggling to find something that's easy to use. I really want to be able to type in the code without introducing a big messy string.</p>
  <p>I really like the idea of simply adding the code I want inside a component's slot. Without having to put it all in a string and lose the visual highlighting in my code editor.</p>
  <p>There are so many problems with this.</p>
  <p>I overcame Vue trying to display the slot content as html by referencing the slot and displaying the html as a string.</p>
  <SyntaxHighlighter code="<script>hello</script>">
  </SyntaxHighlighter>
</template>
 {{ html }}

<script setup>
import SyntaxHighlighter from '@/Components/SyntaxHighlighter.vue';

</script>
