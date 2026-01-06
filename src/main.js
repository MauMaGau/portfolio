import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import '@/Assets/global.scss'

import PlaygroundParticles from '@/Components/Playground/Particles.vue'
import SyntaxHighlight from '@/Components/Playground/SyntaxHighlight.vue'

// Projects
import EveryByway from '@/Components/Projects/EveryByway.vue'
import Vestd from '@/Components/Projects/Vestd.vue'

const app = createApp(App)

app
  .component('PlaygroundParticles', PlaygroundParticles)
  .component('SyntaxHighlight', SyntaxHighlight)
  .component('EB', EveryByway)
  .component('Vestd', Vestd)

app.use(router)

app.mount('#app')
