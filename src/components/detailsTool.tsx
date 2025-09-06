// MUI
import { Box, Button, Icon, Paper, useTheme, Skeleton } from '@mui/material'
// TYPES
import type { DetailsToolsProps } from '@/types'

export const DetailsToll = ({
  displayAddButton = true,
  displayBackButton = true,
  displayDeleteButton = true,
  displaySaveAndBackButton = true,
  displaySaveButton = true,
  onClickAddButton,
  onClickBackButton,
  onClickDeleteButton,
  onClickSave,
  onClickSaveAndBack,
  textButton = 'Novo',
  displayAddButtonCarregando = false,
  displayBackButtonCarregando = false,
  displayDeleteButtonCarregando = false,
  displaySaveAndBackButtonCarregando = false,
  displaySaveButtonCarregando = false,
}: DetailsToolsProps) => {
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
      {displaySaveButton && !displaySaveButtonCarregando && (
        <Button
          variant="contained"
          onClick={() => {
            onClickSave?.()
          }}
          endIcon={<Icon>save</Icon>}
        >
          Salvar
        </Button>
      )}

      {displaySaveButtonCarregando && <Skeleton width={110} height={68} />}

      {displaySaveAndBackButton && !displaySaveAndBackButtonCarregando && (
        <Button
          variant="outlined"
          onClick={() => {
            onClickSaveAndBack?.()
          }}
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
      )}

      {displaySaveAndBackButtonCarregando && (
        <Skeleton width={205} height={68} />
      )}

      {displayDeleteButton && !displayDeleteButtonCarregando && (
        <Button
          variant="outlined"
          onClick={() => {
            onClickDeleteButton?.()
          }}
          endIcon={<Icon>delete</Icon>}
        >
          Remover
        </Button>
      )}

      {displayDeleteButtonCarregando && <Skeleton width={125} height={68} />}

      {displayAddButton && !displayAddButtonCarregando && (
        <Button
          variant="outlined"
          onClick={() => {
            onClickAddButton?.()
          }}
          endIcon={<Icon>add</Icon>}
        >
          {textButton}
        </Button>
      )}

      {displayAddButtonCarregando && <Skeleton width={99} height={68} />}

      {displayBackButton && !displayBackButtonCarregando && (
        <Button
          variant="outlined"
          onClick={() => {
            onClickBackButton?.()
          }}
          endIcon={<Icon>arrow_back</Icon>}
        >
          Voltar
        </Button>
      )}
      {displayBackButtonCarregando && <Skeleton width={110} height={68} />}
    </Box>
  )
}
