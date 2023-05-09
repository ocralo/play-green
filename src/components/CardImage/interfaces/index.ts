export namespace CardImageComponent {
  export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    image?: {
      src?: string
      alt?: string
    }
    text?: string
  }
}
