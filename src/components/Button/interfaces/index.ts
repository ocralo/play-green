import {HTMLAttributes} from 'react'

export namespace ButtonComponent {
  export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: React.ReactNode
  }

  export interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    autoFocus?: boolean | undefined
    disabled?: boolean | undefined
    form?: string | undefined
    formAction?: string | undefined
    formEncType?: string | undefined
    formMethod?: string | undefined
    formNoValidate?: boolean | undefined
    formTarget?: string | undefined
    name?: string | undefined
    type?: 'submit' | 'reset' | 'button' | undefined
    value?: string | ReadonlyArray<string> | number | undefined
  }
}
