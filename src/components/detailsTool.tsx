// MUI
import {
  Box,
  Button,
  Icon,
  Paper,
  useTheme,
  Skeleton,
  Typography,
  Divider,
  useMediaQuery,
} from '@mui/material'
// TYPES
import type { DetailsToolsProps } from '@/types'

export const DetailsToll = ({
  displayAddButton = true,
  displayBackButton = true,
  displayDeleteButton = false,
  displaySaveAndBackButton = true,
  displaySaveButton = false,
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
  const smDouwn = useMediaQuery(theme.breakpoints.down('sm'))
  const mdDouwn = useMediaQuery(theme.breakpoints.down('md'))
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
          <Typography
            variant="button"
            sx={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          >
            Salvar
          </Typography>
        </Button>
      )}

      {displaySaveButtonCarregando && <Skeleton width={110} height={68} />}

      {displaySaveAndBackButton &&
        !displaySaveAndBackButtonCarregando &&
        !mdDouwn && (
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
            <Typography
              variant="button"
              sx={{
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              Salvar e voltar
            </Typography>
          </Button>
        )}

      {displaySaveAndBackButtonCarregando && !mdDouwn && (
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
          <Typography
            variant="button"
            sx={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          >
            Remover
          </Typography>
        </Button>
      )}

      {displayDeleteButtonCarregando && <Skeleton width={125} height={68} />}

      {displayAddButton && !displayAddButtonCarregando && !smDouwn && (
        <Button
          variant="outlined"
          onClick={() => {
            onClickAddButton?.()
          }}
          endIcon={<Icon>add</Icon>}
        >
          <Typography
            variant="button"
            sx={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          >
            {textButton}
          </Typography>
        </Button>
      )}

      {displayAddButtonCarregando && !smDouwn && (
        <Skeleton width={99} height={68} />
      )}

      {displayBackButton &&
        ((displayAddButton && !smDouwn) ||
          displayDeleteButton ||
          (displaySaveAndBackButton && !mdDouwn) ||
          displaySaveButton) && <Divider orientation="vertical" />}

      {displayBackButton && !displayBackButtonCarregando && (
        <Button
          variant="outlined"
          onClick={() => {
            onClickBackButton?.()
          }}
          endIcon={<Icon>arrow_back</Icon>}
        >
          <Typography
            variant="button"
            sx={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          >
            Voltar
          </Typography>
        </Button>
      )}
      {displayBackButtonCarregando && <Skeleton width={110} height={68} />}
    </Box>
  )
}
