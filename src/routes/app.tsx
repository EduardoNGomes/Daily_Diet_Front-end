import { createBrowserRouter } from 'react-router-dom'

import { Home } from '../pages/Home'
import { SignUp } from '../pages/SigUp'
import { Details } from '../pages/Details'
import { Edit } from '../pages/Edit'
import { Created } from '../pages/Created'
import { Metrics } from '../pages/Metrics'
import { New } from '../pages/New'
import { UpdateUser } from '../pages/UpdateUser'
import { SignIn } from '../pages/SigIn'

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/details/:id',
    element: <Details />,
  },
  {
    path: '/edit/:id',
    element: <Edit />,
  },
  {
    path: '/created',
    element: <Created />,
  },
  {
    path: '/metrics',
    element: <Metrics />,
  },
  {
    path: '/new',
    element: <New />,
  },
  {
    path: '/user/edit',
    element: <UpdateUser />,
  },
])

export const AuthRouter = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
])
