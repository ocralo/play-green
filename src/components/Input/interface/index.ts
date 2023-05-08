import {InputHTMLAttributes} from 'react'

export namespace InputComponent {
  export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
  }
}
