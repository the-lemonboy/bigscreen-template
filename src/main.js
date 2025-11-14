import { createApp } from 'vue'
import '@/styles/main.css'
import '@/styles/tailwindcss.css'
import App from './App.vue'
import router from '@/router/index.js'
import { createPinia } from 'pinia'
import { logger } from '@/utils/index.js'

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.config.errorHandler = (err, instance, info) => {
  logger.error('GlobalError', { message: err?.message, info })
}
app.mount('#app')
