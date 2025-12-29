<template>
  <span class="pill">
    <slot></slot>
  </span>
</template>
<style lang="scss">
.pill {
  display: inline-block;
  padding: 0.1rem 0.5rem;
  margin: .5rem .5rem 0 0;
  background-color: #444;
  color: #eee;
  border-radius: 1rem;
  text-wrap-mode: nowrap;
}
</style>
