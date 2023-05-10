import {BrowserRouter, Route, Routes as RS} from 'react-router-dom'

import Home from '@pages/privates/Home'
import History from '@pages/privates/History'
import Login from '@pages/publics/Login'
import SingUp from '@pages/publics/SingUp'

import PrivateRoute from '@routes/PrivateRoute/PrivateRoute'
import useAuth from '@context/AuthContext/hooks'
import Spinner from '@components/Loading'

export default function Routes(): JSX.Element {
  const {isAuthenticated, isLoading} = useAuth()
  return (
    <BrowserRouter>
      <RS>
        <Route path='/login' element={<Login />} />
        <Route path='/sing-up' element={<SingUp />} />
        <Route
          element={
            isLoading ? (
              <Spinner color='#1A5BE1' />
            ) : (
              <PrivateRoute isAllowed={isAuthenticated} />
            )
          }>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/history' element={<History />} />
        </Route>
      </RS>
    </BrowserRouter>
  )
}
