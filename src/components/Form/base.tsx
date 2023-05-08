import {FormComponent} from './interfaces'

export default function FormBase({
  className,
  children,
  ...props
}: FormComponent.Props): JSX.Element {
  return (
    <form {...props} className={className}>
      {children}
    </form>
  )
}
