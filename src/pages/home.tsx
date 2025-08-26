import { Button } from '@mui/material'

import { useDrawer } from '@/Context'

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
