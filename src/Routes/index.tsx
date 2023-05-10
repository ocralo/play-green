import {BrowserRouter, Route, Routes as RS} from 'react-router-dom'

import Home from '@pages/privates/Home'
import History from '@pages/privates/History'
import Login from '@pages/publics/Login'
import SingUp from '@pages/publics/SingUp'

import PrivateRoute from '@routes/PrivateRoute/PrivateRoute'
import useAuth from '@context/AuthContext/hooks'

export default function Routes(): JSX.Element {
  const {isAuthenticated} = useAuth()
  return (
    <BrowserRouter>
      <RS>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sing-up' element={<SingUp />} />
        <Route element={<PrivateRoute isAllowed={isAuthenticated} />}>
          <Route path='/home' element={<Home />} />
          <Route path='/history' element={<History />} />
        </Route>
      </RS>
    </BrowserRouter>
  )
}
