import axios from 'axios'
import { responseInterceptor, errorInterceptor } from '../Interceptors'

const apiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
})

apiInstance.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
)

export { apiInstance }
