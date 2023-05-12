import React, {useCallback, useEffect} from 'react'

import useSport from '@context/SportContext/hooks'
import CardImage from '@components/CardImage'
import NavigationNavbar from '@components/NavigationNavbar'
import Button from '@components/Button'
import HearthIcon from '@components/Icons/Hearth'
import DislikeIcon from '@components/Icons/Dislike'
import Spinner from '@components/Loading'
import ButtonSwitchTheme from '@components/ButtonSwitchTheme'

import {HomeLayout} from './layout'

function Component() {
  const {getSports, sport, isLoading, addLikeSport} = useSport()

  const handleRequest = useCallback(async () => {
    await getSports()
  }, [getSports])

  const handleLikeSport = async (liked: boolean) => {
    if (!sport) return
    const sportLiked = {...sport, liked}
    await addLikeSport(sportLiked)
  }

  useEffect(() => {
    handleRequest()
  }, [handleRequest])

  return (
    <>
      <HomeLayout>
        <div className='home-container'>
          <ButtonSwitchTheme />
          {isLoading ? (
            <div className='home-container-spinner'>
              <Spinner color='#1A5BE1' />
            </div>
          ) : (
            <CardImage
              image={{src: sport?.image, alt: sport?.name}}
              text={sport?.name}
              key={`sport-${sport?.name}`}
              className='home-card-image'
            />
          )}
          <div className='container-interaction'>
            <Button
              disabled={!sport}
              key={`disLike-${sport?.name}`}
              className='dislike-button'
              onClick={() => handleLikeSport(false)}>
              <DislikeIcon />
            </Button>
            <Button
              disabled={!sport}
              key={`like-${sport?.name}`}
              className='like-button'
              onClick={() => handleLikeSport(true)}>
              <HearthIcon />
            </Button>
          </div>
          <NavigationNavbar />
        </div>
      </HomeLayout>
    </>
  )
}

const Home = React.memo(Component)

export default Home
