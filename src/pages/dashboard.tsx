import { SourceLayoutApp } from '@/layouts'
import { ToolBar } from '@/components'

export const Dashboard = () => {
  return (
    <>
      <SourceLayoutApp
        titulo="Página Inicial"
        toolBar={<ToolBar displayButton displayTextFiled />}
      >
        <p>Ola mundo</p>
      </SourceLayoutApp>
    </>
  )
}
