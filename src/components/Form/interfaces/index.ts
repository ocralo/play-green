import {HTMLAttributes} from 'react'

export namespace FormComponent {
  export interface Props extends FormHTMLAttributes<HTMLFormElement> {
    className?: string
    children: React.ReactNode
  }

  export interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    acceptCharset?: string | undefined
    action?: string | undefined
    autoComplete?: string | undefined
    encType?: string | undefined
    method?: string | undefined
    name?: string | undefined
    noValidate?: boolean | undefined
    target?: string | undefined
  }
}
