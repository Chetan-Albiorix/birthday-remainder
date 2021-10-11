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
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Editor } from '@tinymce/tinymce-react'

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
  const schema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string()
      .email('Invalid email')
      .required(),
    mobileNumber: Yup.string().required(),
    gender: Yup.string().required(),
    message: Yup.string().required(),
  })

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      gender: '',
      message: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

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
        <form onSubmit={formik.handleSubmit}>
          <DialogContent dividers>
            <AddFriendContainer>
              <Grid xs={12} container>
                <Box mr={2} mt={1}>
                  <TextField
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    variant="standard"
                    onChange={formik.handleChange}
                    value={
                      formik.values.firstName
                    }
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.firstName &&
                  formik.errors.firstName ? (
                    <div>
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </Box>
                <Box mt={1}>
                  <TextField
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    variant="standard"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.lastName &&
                  formik.errors.lastName ? (
                    <div>
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </Box>
              </Grid>
              <Grid xs={12} container>
                <Box mr={2} mt={1}>
                  <TextField
                    id="mobileNumber"
                    name="mobileNumber"
                    label="Mobile Number"
                    variant="standard"
                    onChange={formik.handleChange}
                    value={
                      formik.values.mobileNumber
                    }
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.mobileNumber &&
                  formik.errors.mobileNumber ? (
                    <div>
                      {formik.errors.mobileNumber}
                    </div>
                  ) : null}
                </Box>
                <Box mt={1}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="standard"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.touched.email &&
                  formik.errors.email ? (
                    <div>
                      {formik.errors.email}
                    </div>
                  ) : null}
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
                      label="Gender"
                      fullWidth
                      onChange={
                        formik.handleChange
                      }
                      value={formik.values.gender}
                      onBlur={formik.handleBlur}
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
                  {formik.touched.gender &&
                  formik.errors.gender ? (
                    <div>
                      {formik.errors.gender}
                    </div>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid xs={12} container mt={3}>
                {/* <TextareaAutosize
                  id="message"
                  name="message"
                  minRows={3}
                  placeholder="Message"
                  style={{ width: '100%' }}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.message &&
                formik.errors.message ? (
                  <div>
                    {formik.errors.message}
                  </div>
                ) : null} */}
                <Editor
                  apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
                  init={{
                    plugins: [
                      'emoticons',
                      'advlist autolink lists link image',
                      'charmap print preview anchor help',
                      'searchreplace visualblocks code',
                      'insertdatetime media table paste wordcount',
                    ],
                    toolbar:
                      'emoticons | undo redo | formatselect | bold italic | \
                    alignleft aligncenter alignright | \
                    bullist numlist outdent indent | help',
                    toolbar_location: 'bottom',
                    menubar: false,
                    statusbar: false,
                    height: 250,
                    width: 420,
                  }}
                />
              </Grid>
            </AddFriendContainer>
          </DialogContent>
          <DialogActions>
            <Button type="submit">
              Save changes
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  )
}

export default AddFriend
