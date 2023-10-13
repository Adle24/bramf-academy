import './assets/main.scss'

import BootstrapVueNext from 'bootstrap-vue-next'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { initialize } from './helpers/general'
import { useDataStore } from './stores/data'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(BootstrapVueNext)

const store = useDataStore()
initialize(store, router)

app.mount('#app')
