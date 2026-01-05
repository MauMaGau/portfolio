<template>
  <div class="project-view">
    <component :is="$route.params.page"></component>
  </div>
</template>
<style>
.project-view {
  margin-top: 4rem;
}
</style>
