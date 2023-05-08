import {HTMLAttributes} from 'react'

export namespace ErrorTextComponent {
  export interface Props extends HTMLAttributes<HTMLParagraphElement> {
    className?: string
    error: string
  }
}
