import { useCookies } from 'react-cookie'

import { AuthRouter, AppRouter } from './app'
import { RouterProvider } from 'react-router-dom'

export const Routes = () => {
  const [cookies] = useCookies(['token'])

  if (cookies.token) {
    return <RouterProvider router={AppRouter} />
  } else {
    return <RouterProvider router={AuthRouter} />
  }
}
