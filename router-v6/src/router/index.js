import React from 'react'
import {useRoutes} from 'react-router-dom'
import Redirect from '../component/Redirect';
import AuthComponent from '../component/AuthComponent.jsx'

export default function MyRouter() {
  const routes = useRoutes([
    {
      path: '/films',
      element: LazyLoad('film/Film'),
      children: [
        {
          path: '',
          element: <Redirect to="/films/nowplaying"/>
        },
        {
          path: 'nowplaying',
          element: LazyLoad('film/Nowplaying')
        },
        {
          path: 'comingsoon',
          element: LazyLoad('film/Comingsoon')
        }
      ]
    },
    {
      path: '/cinemas',
      element: LazyLoad('Cinema')
    },
    {
      path: '/cinemas/search',
      element: LazyLoad('Search')
    },
    {
      path: '/login',
      element: LazyLoad('Login')
    },
    {
      path: '/center',
      element: <AuthComponent>
        {LazyLoad('Center')}
      </AuthComponent>
    },
    {
      path: '/detail/:id',
      element: LazyLoad('Detail')
    },
    {
      path: '/',
      element: <Redirect to="/films"/>
    },
    {
      path: '*',
      element: LazyLoad('Notfound')
    }
  ])
  return (
    routes
  )
}

// function isAuth() {
//   return localStorage.getItem('token')
// }

// 路由懒加载
const LazyLoad = (path) => {
  const Comp = React.lazy(() => import(`../view/${path}`))
  return (
    <React.Suspense fallback={<div>Loading.....</div>}>
      <Comp/>
    </React.Suspense>
  )
}
