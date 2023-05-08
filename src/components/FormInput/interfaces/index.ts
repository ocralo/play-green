import {InputHTMLAttributes} from 'react'

export namespace FormInputComponent {
  export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    label?: string
    error?: string
    wrapperStyle?: React.CSSProperties
  }
}
