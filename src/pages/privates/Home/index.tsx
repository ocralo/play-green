import useSport from '@context/SportContext/hooks'
import CardImage from '@components/CardImage'
import NavigationNavbar from '@components/NavigationNavbar'
import Button from '@components/Button'
import HearthIcon from '@components/Icons/Hearth'
import DislikeIcon from '@components/Icons/Dislike'

import {HomeLayout} from './layout'

export default function Home() {
  const {getSports, sports} = useSport()
  const handleRequest = async () => {
    await getSports()
  }

  return (
    <HomeLayout>
      <div className='home-container'>
        <CardImage className='home-card-image' />
        <div className='container-interaction'>
          <Button className='dislike-button'>
            <DislikeIcon />
          </Button>
          <Button className='like-button'>
            <HearthIcon />
          </Button>
        </div>
        <NavigationNavbar />
        <button onClick={handleRequest}>Get All sports</button>
        <code>{JSON.stringify(sports)}</code>
      </div>
    </HomeLayout>
  )
}
