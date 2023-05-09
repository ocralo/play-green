import {useState} from 'react'

import DislikeIcon from '@components/Icons/Dislike'
import HearthIcon from '@components/Icons/HeartSmall'
import {CardListImageComponent} from './interfaces'

export default function CardIListImageBase({
  className,
  image = {
    src: 'https://www.thesportsdb.com/images/sports/extreme_sports.jpg',
    alt: 'Soccer',
  },
  text = 'Soccer',
  isLiked = true,
}: CardListImageComponent.Props) {
  const [state, setState] = useState(image)

  return (
    <div className={className}>
      <div className='container-lef'>
        <img
          className='card-image'
          src={state.src}
          alt={state.alt}
          onError={() => {
            setState({
              ...state,
              src: 'https://lrabm.files.wordpress.com/2020/06/sports-image-low-res.jpg',
            })
          }}
        />
        <div className='card-content-title'>
          <h2 className='card-title'>{text}</h2>
        </div>
      </div>
      <div className='container-right'>
        {isLiked ? (
          <HearthIcon className='like' />
        ) : (
          <DislikeIcon className='error' />
        )}
      </div>
    </div>
  )
}
