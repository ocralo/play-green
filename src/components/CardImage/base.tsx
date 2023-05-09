import {CardImageComponent} from './interfaces'

export default function CardImageBase({
  className,
  image = {
    src: 'https://www.thesportsdb.com/images/sports/extreme_sports.jpg',
    alt: 'Soccer',
  },
  text = 'Soccer',
}: CardImageComponent.Props) {
  return (
    <div className={className}>
      <img className='card-image' src={image.src} alt={image.alt} />
      <div className='card-content-title'>
        <h2 className='card-title'>{text}</h2>
      </div>
    </div>
  )
}
