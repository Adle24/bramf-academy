import './assets/main.scss'

import BootstrapVueNext from 'bootstrap-vue-next'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { initialize } from './helpers/general'
import { useDataStore } from './stores/data'

import App from './App.vue'
import router from './router'

import VueGtag from 'vue-gtag'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(BootstrapVueNext)
app.use(
  VueGtag,
  {
    appName: import.meta.env.VITE_MEASUREMENT_NAME,
    pageTrackerScreenviewEnabled: true,
    config: { id: import.meta.env.VITE_MEASUREMENT_ID }
  },
  router
)

const store = useDataStore()
initialize(store, router)

app.mount('#app')
