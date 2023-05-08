import {ErrorTextComponent} from './interfaces'

export default function ErrorTextBase({
  error,
  className,
}: ErrorTextComponent.Props): JSX.Element {
  return <span className={className}>{error}</span>
}
