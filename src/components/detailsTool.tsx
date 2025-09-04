import { Box, Button, Icon, Paper, useTheme } from '@mui/material'

export const DetailsToll = () => {
  const theme = useTheme()
  return (
    <Box
      component={Paper}
      sx={{
        display: 'flex',
        gap: 1,
        marginX: 1,
        padding: 1,
        paddingX: 2,
        height: theme.spacing(7),
        backgroundColor: theme.palette.background.default,
        alignItems: 'center',
      }}
    >
      <Button
        variant="contained"
        onClick={() => {}}
        endIcon={<Icon>save</Icon>}
      >
        Salvar
      </Button>
      <Button
        variant="outlined"
        onClick={() => {}}
        endIcon={
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.1,
              justifyContent: 'center',
            }}
          >
            <Icon sx={{ fontSize: '20px' }}>arrow_back</Icon>
            <Icon sx={{ fontSize: '20px' }}>save</Icon>
          </Box>
        }
      >
        Salvar e voltar
      </Button>
      <Button
        variant="outlined"
        onClick={() => {}}
        endIcon={<Icon>delete</Icon>}
      >
        Remover
      </Button>
      <Button variant="outlined" onClick={() => {}} endIcon={<Icon>add</Icon>}>
        Novo
      </Button>
      <Button
        variant="outlined"
        onClick={() => {}}
        endIcon={<Icon>arrow_back</Icon>}
      >
        Voltar
      </Button>
    </Box>
  )
}
