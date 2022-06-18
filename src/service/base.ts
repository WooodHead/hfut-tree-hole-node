import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { addInterceptor, getResponseDataInterceptor } from './interceptors'

export function createInstance(config: AxiosRequestConfig = {}) {
  const instance = axios.create(config)
  addInterceptor(instance, { response: getResponseDataInterceptor })

  return instance
}

const baseInstance = createInstance({ })

export function request(config: AxiosRequestConfig = { method: 'get' }) {
  if (!config.method) {
    if (process.env.mode === 'dev') {
      console.warn('method cannot be undefined, but system let it to be #get automatically')
    }
    config.method = 'get'
  }

  return baseInstance(config)
}
