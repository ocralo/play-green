import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

import {IPrivateRoute} from './interfaces'

function Component({
  isAllowed,
  redirectTo = '/login',
}: IPrivateRoute.Props): React.ReactElement | JSX.Element {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />
  }

  return <Outlet />
}

const PrivateRoute = React.memo(Component)

export default PrivateRoute
