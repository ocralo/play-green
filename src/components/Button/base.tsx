import {ButtonComponent} from './interfaces'

export default function ButtonBase({
  className,
  children,
  ...props
}: ButtonComponent.Props): JSX.Element {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  )
}
