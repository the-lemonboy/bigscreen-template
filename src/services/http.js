import axios from 'axios'
import { useAppStore } from '@/stores/app.js'
import router from '@/router/index.js'
import { logger } from '@/utils/index.js'

const baseURL = import.meta.env.VITE_API_BASE_URL || '/cityk'

const http = axios.create({
  baseURL,
  timeout: 15000,
})

http.interceptors.request.use((config) => {
  const app = useAppStore()
  if (app?.token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${app.token}`
  }
  return config
})

http.interceptors.response.use(
  (res) => res.data,
  async (error) => {
    const status = error?.response?.status
    if (status === 401) {
      const app = useAppStore()
      app.clearToken()
      try {
        const redirect = router?.currentRoute?.value?.fullPath || '/'
        router.replace({ name: 'login', query: { redirect } })
      } catch (_) {}
    }
    const message = error?.response?.data?.message || error.message || '网络错误'
    const url = error?.config?.url
    const method = error?.config?.method
    logger.error('HttpError', { status, message, url, method })
    return Promise.reject({ status, message, url, method })
  }
)

export default http