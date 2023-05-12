import {useCallback, useEffect} from 'react'
import {NavLink} from 'react-router-dom'

import Spinner from '@components/Loading'
import NavigationNavbar from '@components/NavigationNavbar'
import CardListImage from '@components/CardListImage'
import useSport from '@context/SportContext/hooks'
import ArrowLeftBoldIcon from '@components/Icons/ArrowLeftBold'

import {HistoryLayout} from './layout'

export default function History() {
  const {isLoading, getLikesSports, sportsLiked} = useSport()

  const handleRequest = useCallback(async () => {
    await getLikesSports()
  }, [getLikesSports])

  useEffect(() => {
    handleRequest()
  }, [handleRequest])

  return (
    <HistoryLayout>
      <div className='history-container'>
        <NavLink to='/home' className='history-back-button'>
          <ArrowLeftBoldIcon />
        </NavLink>
        <div>
          <h1 className='history-title'>History</h1>
          <h6 className='history-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h6>
          <p className='history-date'>17 december</p>
        </div>
        <div className='history-container-cards'>
          {isLoading ? (
            <div className='history-container-spinner'>
              <Spinner color='#1A5BE1' />
            </div>
          ) : (
            sportsLiked?.map((sportLiked) => (
              <CardListImage
                text={sportLiked.name}
                image={{src: sportLiked.image, alt: sportLiked.name}}
                isLiked={sportLiked.liked}
                key={`sport-liked-${sportLiked.id}`}
              />
            ))
          )}
        </div>
        <NavigationNavbar className='navigation-bar' />
      </div>
    </HistoryLayout>
  )
}
