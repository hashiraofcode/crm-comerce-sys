import { Enviroments } from '@/env'
import { apiInstance } from './axiosInstance'
import type { AxiosRequestConfig } from 'axios'
import type { detailsPeople, PeoplesAndTotalCount } from '@/types'

const getAll = async (
  page = 1,
  filter = '',
  config?: AxiosRequestConfig,
): Promise<PeoplesAndTotalCount | Error> => {
  try {
    const Url = `/pessoas?_page=${page}&_limit=${Enviroments.LIMITE_DE_LINHAS}&_fullName_like=${filter}`
    const { data, headers } = await apiInstance({
      url: Url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
      },
      ...config,
    })
    if (data) {
      return {
        data,
        totalCount: Number(
          headers['x-total-count'] || Enviroments.LIMITE_DE_LINHAS,
        ),
      }
    }
    throw new Error('Erro ao listar os users')
  } catch (error) {
    console.error(error)
    throw new Error(
      (error as { menssage: string }).menssage || 'Erro ao listar os users',
    )
  }
}

const getById = async (
  id: number,
  configs?: AxiosRequestConfig,
): Promise<detailsPeople | Error> => {
  try {
    const data = await apiInstance({
      url: `/pessoas/${id}`,
      headers: {
        ...configs?.headers,
      },
      ...configs,
    })
    if (data) {
      return data.data
    }
    throw new Error('Erro de busca pelo id')
  } catch (e) {
    console.error(
      'Error: ' + (e as { mensage: string }).mensage ||
        'função do get by id deu erro ',
    )
    return new Error(
      (e as { mensage?: string }).mensage || 'função do get by id deu erro ',
    )
  }
}
const create = async (): Promise<any> => {}
const upDateById = async (): Promise<any> => {}
const deletById = async (): Promise<any> => {}

export { getAll, getById, create, upDateById, deletById }
