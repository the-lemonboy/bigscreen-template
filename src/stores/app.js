import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    token: '',
  }),
  actions: {
    setToken(t) {
      this.token = t || ''
    },
    clearToken() {
      this.token = ''
    },
  },
})