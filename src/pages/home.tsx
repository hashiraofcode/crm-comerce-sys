import { Button } from '@mui/material'

import { useDrawer } from '@/utils/index'

export const Home = () => {
  const DrawerOptions = useDrawer()
  return (
    <>
      <Button
        onClick={() => {
          DrawerOptions?.toggleDrawer()
        }}
      >
        Toogle Theme
      </Button>
    </>
  )
}
