import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import '@/Assets/global.scss'

import PlaygroundParticles from '@/Components/Playground/Particles.vue'

const app = createApp(App)

app
  .component('PlaygroundParticles', PlaygroundParticles)

app.use(router)

app.mount('#app')
