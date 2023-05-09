import {NavLink, useNavigate} from 'react-router-dom'

import useAuth from '@context/AuthContext/hooks'
import HomeIcon from '@components/Icons/Home'
import HistoryIcon from '@components/Icons/History'
import LogoutIcon from '@components/Icons/Logout'
import {NavigationNavbarComponent} from './interfaces'

export default function NavigationNavbarBase({
  className,
}: NavigationNavbarComponent.Props) {
  const navigate = useNavigate()
  const {logout} = useAuth()

  const handleLogout = async (): Promise<void> => {
    await logout()
    navigate('/login')
  }

  return (
    <div className={className}>
      <NavLink to='/home' className='button-navigation'>
        <HomeIcon />
      </NavLink>
      <NavLink to='/history' className='button-navigation'>
        <HistoryIcon />
      </NavLink>
      <button className='button-navigation' onClick={handleLogout}>
        <LogoutIcon />
      </button>
    </div>
  )
}
