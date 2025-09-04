export interface DetailsToolsProps {
  // DISPLAY OPTIONS
  displaySaveButton?: boolean
  displaySaveAndBackButton?: boolean
  displayBackButton?: boolean
  displayDeleteButton?: boolean
  displayAddButton?: boolean

  // Text from add button
  textButton?: string

  // FUNCTIONS FROM OPTIONS
  onClickSave?: () => void
  onClickSaveAndBack?: () => void
  onClickBackButton?: () => void
  onClickDeleteButton?: () => void
  onClickAddButton?: () => void
}
