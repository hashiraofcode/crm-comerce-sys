import type { AxiosError } from 'axios'

export const errorInterceptor = (error: AxiosError) => {
  if (error.message === 'Network Error')
    throw new Error('Falha na conexão, verifique sua internet')

  if (error.response?.status == 401) throw new Error('Erro de autenticação')

  return error
}
