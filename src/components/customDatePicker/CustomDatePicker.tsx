import * as React from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'

interface CustomDatePickerProps {
  label: string
  date: Date | null
  disableFuture: boolean
  onDateChanged: (date: Date | null) => void
}
const CustomDatePicker: React.FC<CustomDatePickerProps> =
  ({
    label,
    date,
    disableFuture,
    onDateChanged,
  }) => {
    const [value, setValue] =
      React.useState<Date | null>(
        new Date('2014-08-18T21:11:54')
      )

    const handleChange = (
      newValue: Date | null
    ) => {
      setValue(newValue)
    }

    return <div> CustomDatePicker </div>
    // <LocalizationProvider
    //   dateAdapter={AdapterDateFns}
    // >
    //   <Stack spacing={3}>
    //     <DateTimePicker
    //       label="Birth Date"
    //       value={value}
    //       onChange={handleChange}
    //       renderInput={(params) => (
    //         <TextField {...params} />
    //       )}
    //     />
    //   </Stack>
    // </LocalizationProvider>
  }

export default CustomDatePicker
