import {CardImageComponent} from './interfaces'

export default function CardImageBase({className}: CardImageComponent.Props) {
  return (
    <div className={className}>
      <img
        className='card-image'
        src='https://www.thesportsdb.com/images/sports/extreme_sports.jpg'
        alt='Soccer'
      />
      <div className='card-content-title'>
        <h2 className='card-title'>Soccer</h2>
      </div>
    </div>
  )
}
