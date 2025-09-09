//MUI
import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material'
//TYPES
import type { ToolBarProps } from '@/types/index'
import type { ChangeEvent } from 'react'
import { Enviroments } from '@/env'

export const ToolBar = ({
  displayTextFiled = false,
  onChangeTextFiled,
  valueFinding = '',
  displayButton,
  textButton = 'Novo',
  onClickInButton,
}: ToolBarProps) => {
  const theme = useTheme()

  return (
    <>
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
        {displayTextFiled && (
          <TextField
            size="small"
            placeholder={Enviroments.INPUT_DE_BUSCA}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onChangeTextFiled?.(e.currentTarget.value)
            }
            value={valueFinding}
            slotProps={{
              input: {
                endAdornment: <Icon color="primary">manage_search</Icon>,
              },
            }}
          />
        )}
        <Box display={'flex'} flex={1} justifyContent={'flex-end'}>
          {displayButton && (
            <Button
              variant="contained"
              onClick={() => onClickInButton?.()}
              endIcon={<Icon>add</Icon>}
            >
              {textButton}
            </Button>
          )}
        </Box>
      </Box>
    </>
  )
}
