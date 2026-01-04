import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import '@/Assets/global.scss'

import PlaygroundParticles from '@/Components/Playground/Particles.vue'
import SyntaxHighlight from '@/Components/Playground/SyntaxHighlight.vue'

const app = createApp(App)

app
  .component('PlaygroundParticles', PlaygroundParticles)
  .component('SyntaxHighlight', SyntaxHighlight)

app.use(router)

app.mount('#app')
