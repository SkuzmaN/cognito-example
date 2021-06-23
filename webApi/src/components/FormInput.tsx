import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import { useController, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

interface FormInputProps extends Omit<TextFieldProps, 'onChange' | 'inputRef' | 'value' | 'error'> {
  name: string
  defaultValue?: string
}

export const FormInput = ({ name, defaultValue, ...rest }: FormInputProps): JSX.Element => {
  const {
    formState: { errors }
  } = useFormContext()

  const {
    field: { ref, value, ...fieldProps },
    fieldState: { error }
  } = useController({
    name,
    defaultValue
  })

  return (
    <TextField
      {...rest}
      {...fieldProps}
      inputRef={ref}
      error={!!error}
      helperText={<ErrorMessage errors={errors} name={name} />}
    />
  )
}
