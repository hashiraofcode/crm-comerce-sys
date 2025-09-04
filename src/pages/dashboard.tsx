import { SourceLayoutApp } from '@/layouts'
import { DetailsToll } from '@/components'

export const Dashboard = () => {
  return (
    <>
      <SourceLayoutApp titulo="Página Inicial" toolBar={<DetailsToll />}>
        <p>Ola mundo</p>
      </SourceLayoutApp>
    </>
  )
}
