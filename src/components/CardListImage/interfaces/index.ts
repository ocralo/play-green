export namespace CardListImageComponent {
  export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    image?: {
      src?: string
      alt?: string
    }
    text?: string
    isLiked?: boolean
  }
}
