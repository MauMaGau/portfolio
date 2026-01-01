<template>
<p>You know what would be silly? A dark-mode switcher that looked like a fire torch. Unlit in light mode, lit in dark mode. And with flames! Let's figure out a way to do that in css.</p>
  <p>I'm going to start with making a simple particle effect. Something that looks like burning embers rising.</p>
  <div>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
    <span class="particle"></span>
  </div>
</template>

<style lang="scss" scoped>
.particle {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 10px;
  background-color: red;
  border-radius: 200px 200px 20px 20px;
  animation: particle-slide 3s ease-out infinite;

  &:nth-child(2) {
    animation-delay: .8s;
  }
  &:nth-child(3) {
    animation-delay: 1.3s;
  }
  &:nth-child(4) {
    animation-delay: 1.7s;
  }
}

@keyframes particle-slide {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  30% {
    opacity: 0.8;
    transform: scale(1);
  }
  100% {
    transform: translateY(0px) scale(0.5);
    opacity: 0;
    border-radius: 2px 2px 2px 20px;
  }
}
</style>
