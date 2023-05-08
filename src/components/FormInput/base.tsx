import Input from '@components/Input'
import {FormInputComponent} from './interfaces'

export default function FormInputBase({
  className,
  wrapperStyle,
  label,
  id,
  error,
  ...props
}: FormInputComponent.Props) {
  return (
    <div className={className} style={wrapperStyle}>
      <label htmlFor={id}>{label}</label>
      <Input {...props} name={id} id={id} />
      <span className='error-text'>{error}</span>
    </div>
  )
}
