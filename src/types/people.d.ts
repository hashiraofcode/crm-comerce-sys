export interface ListPeople {
  id: number
  email: string
  cityId: number
  fullName: string
}

export interface detailsPeople {
  id: number
  email: string
  cityId: number
  fullName: string
}

export type PeoplesAndTotalCount = {
  data: ListPeople[]
  totalCount: number
}
