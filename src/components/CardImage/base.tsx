import {useState} from 'react'
import {CardImageComponent} from './interfaces'

export default function CardImageBase({
  className,
  image = {
    src: 'https://www.thesportsdb.com/images/sports/extreme_sports.jpg',
    alt: 'Soccer',
  },
  text = 'Soccer',
}: CardImageComponent.Props) {
  const [state, setState] = useState(image)

  return (
    <div className={className}>
      <img
        className='card-image'
        src={state.src}
        alt={state.alt}
        onError={() => {
          setState({
            ...state,
            src: 'https://secure.img1-fg.wfcdn.com/im/27999507/resize-h755-w755%5Ecompr-r85/8421/84210001/Villard+Peel+%26+Stick+Wallpaper.jpg',
          })
        }}
      />
      <div className='card-content-title'>
        <h2 className='card-title'>{text}</h2>
      </div>
    </div>
  )
}
