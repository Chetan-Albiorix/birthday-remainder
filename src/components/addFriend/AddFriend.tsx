import * as React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from '@mui/material'
import { AddFriendContainer } from './AddFriend.Style'

const BootstrapDialog = styled(Dialog)(
  ({ theme }) => ({
    '& .MuDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuDialogActions-root': {
      padding: theme.spacing(1),
    },
  })
)

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

const BootstrapDialogTitle = (
  props: DialogTitleProps
) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) =>
              theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

interface AddFriendProps {
  isShownDialog: boolean
  handleClose: () => void
}

const AddFriend: React.FC<AddFriendProps> = ({
  isShownDialog,
  handleClose,
}) => {
  const [gender, setGender] = React.useState('')

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isShownDialog}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Add Birth Date
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <AddFriendContainer>
            <Grid xs={12} container>
              <Box mr={2} mt={1}>
                <TextField
                  label="First Name"
                  variant="standard"
                />
              </Box>
              <Box mt={1}>
                <TextField
                  label="Last Name"
                  variant="standard"
                />
              </Box>
            </Grid>
            <Grid xs={12} container>
              <Box mr={2} mt={1}>
                <TextField
                  label="Mobile Number"
                  variant="standard"
                />
              </Box>
              <Box mt={1}>
                <TextField
                  label="Email"
                  variant="standard"
                />
              </Box>
            </Grid>
            <Grid xs={12} container>
              <Box mr={2} mt={1}>
                <TextField
                  label="Birth Date"
                  variant="standard"
                />
                {/* <CustomDatePicker
                  date={new Date()}
                  label="Birth Date"
                  disableFuture={true}
                  onDateChanged={(
                    date: Date | null
                  ) => {}}
                /> */}
              </Box>
              <FormControl
                variant="standard"
                sx={{ minWidth: 200 }}
              >
                <Box mt={1}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Gender
                  </InputLabel>
                  <Select
                    value={gender}
                    onChange={() => {}}
                    label="Gender"
                    fullWidth
                  >
                    <MenuItem value="Male">
                      Male
                    </MenuItem>
                    <MenuItem value="FeMale">
                      FeMale
                    </MenuItem>
                    <MenuItem value="Others">
                      Others
                    </MenuItem>
                  </Select>
                </Box>
              </FormControl>
            </Grid>
            <Grid xs={12} container mt={3}>
              <TextareaAutosize
                minRows={3}
                placeholder="Message"
                style={{ width: '100%' }}
              />
            </Grid>
          </AddFriendContainer>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}

export default AddFriend
