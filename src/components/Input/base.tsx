import {InputComponent} from './interface'

export default function InputBase({
  className,
  id,
  type,
  ...props
}: InputComponent.Props) {
  return (
    <input className={className} type={type} name={id} id={id} {...props} />
  )
}
