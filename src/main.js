import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import Icon from './components/Icon.vue'
import { Tooltip } from "primevue"
import PrimeVue from 'primevue/config'
import PrimeVueTheme from '@/assets/primevue'

const app = createApp(App)

app.component('icon', Icon)
app.directive('tooltip', Tooltip)

app.use(PrimeVue, {
  unstyled: true,
  pt: PrimeVueTheme
})

app.mount('#app')
