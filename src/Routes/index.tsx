import {BrowserRouter, Route, Routes as RS} from 'react-router-dom'

import Home from '@pages/privates/Home'
import History from '@pages/privates/History'
import Login from '@pages/publics/Login'
import SingUp from '@pages/publics/SingUp'

import PrivateRoute from '@routes/PrivateRoute/PrivateRoute'
import useAuth from '@context/AuthContext/hooks'
import Spinner from '@components/Loading'
import WrapperSpinner from '@components/WrapperSpinner'

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
              <WrapperSpinner>
                <Spinner color='#1A5BE1' />
              </WrapperSpinner>
            ) : (
              <PrivateRoute isAllowed={isAuthenticated} />
            )
          }>
          <Route path='/home' element={<Home />} />
          <Route path='/history' element={<History />} />
          <Route index element={<Home />} />
        </Route>
      </RS>
    </BrowserRouter>
  )
}
