/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react'
import Spinner from '@components/Loading'
import NavigationNavbar from '@components/NavigationNavbar'
import CardListImage from '@components/CardListImage'
import useSport from '@context/SportContext/hooks'

import {HistoryLayout} from './layout'

export default function History() {
  const {isLoading, getLikesSports, sportsLiked} = useSport()

  const handleRequest = async () => {
    await getLikesSports()
  }

  useEffect(() => {
    handleRequest()
  }, [])

  useEffect(() => {
    console.log(sportsLiked)
  }, [sportsLiked])

  return (
    <HistoryLayout>
      {isLoading ? (
        <Spinner color='#1A5BE1' />
      ) : (
        <>
          <h1 className='history-title'>History</h1>
          <h6 className='history-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h6>
          <p className='history-date'>17 december</p>
          <div className='history-container'>
            <div className='history-container-cards'>
              {sportsLiked?.map((sportLiked) => (
                <CardListImage
                  text={sportLiked.name}
                  image={{src: sportLiked.image, alt: sportLiked.name}}
                  isLiked={sportLiked.liked}
                  key={`sport-liked-${sportLiked.id}`}
                />
              ))}
            </div>
            <NavigationNavbar className='navigation-bar' />
          </div>
        </>
      )}
    </HistoryLayout>
  )
}
