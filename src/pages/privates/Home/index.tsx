/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react'

import useSport from '@context/SportContext/hooks'
import CardImage from '@components/CardImage'
import NavigationNavbar from '@components/NavigationNavbar'
import Button from '@components/Button'
import HearthIcon from '@components/Icons/Hearth'
import DislikeIcon from '@components/Icons/Dislike'
import Spinner from '@components/Loading'

import {HomeLayout} from './layout'

export default function Home() {
  const {getSports, sport, isLoading, addLikeSport} = useSport()

  const handleRequest = async () => {
    await getSports()
  }

  const handleLikeSport = async (liked: boolean) => {
    if (!sport) return
    const sportLiked = {...sport, liked}
    await addLikeSport(sportLiked)
  }

  useEffect(() => {
    handleRequest()
  }, [])

  return (
    <>
      <HomeLayout>
        {isLoading ? (
          <Spinner color='#1A5BE1' />
        ) : (
          <div className='home-container'>
            <CardImage
              image={{src: sport?.image, alt: sport?.name}}
              text={sport?.name}
              className='home-card-image'
            />
            <div className='container-interaction'>
              <Button
                disabled={!sport}
                className='dislike-button'
                onClick={() => handleLikeSport(false)}>
                <DislikeIcon />
              </Button>
              <Button
                disabled={!sport}
                className='like-button'
                onClick={() => handleLikeSport(true)}>
                <HearthIcon />
              </Button>
            </div>
            <NavigationNavbar />
          </div>
        )}
      </HomeLayout>
    </>
  )
}
