import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
// import {Navigate} from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Nowplaying from '../views/Nowplaying'
import Comingsoon from '../views/Comingsoon'
import Detail from '../views/Detail'
import Login from '../views/Login'
import { RequireAuth, AuthProvider } from '../components/Auth'

export default function MyRouter() {

  return (
    <AuthProvider>
      {/* // HashRouter不推荐使用 */}
      {/* // <HashRouter>
      // <BrowserRouter>
      // react-router v6中使用Routes替代了Switch */}
      <Routes>
        {/* 在v6中，删除了Redirect组件，推荐使用Navigate替代, 或者自定义Redirect */}
        {/* <Redirect from="/" to="/films"/> */}
        {/* <Route path="/" element={<Navigate to="/films" replace/>}/> */}
        <Route path='/' element={<Redirect to="/films"/>}/>
        <Route path="/films/*" element={<Films/>}>
          <Route path='*' element={<Redirect to="/films/nowplaying"/>}/>
          <Route path="nowplaying" element={<Nowplaying/>}/>
          <Route path="comingsoon" element={<Comingsoon/>}/>
        </Route>
        <Route path="/cinemas" element={<Cinemas/>}/>
        <Route path="/center" element={
          <RequireAuth>
            <Center/>
          </RequireAuth>
        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        {/* v6中不用设置exact，如下所示 */}
        <Route path="*" element={<NotFound/>}/>
        {/* 也可以将url导向not-found */}
        {/* <Route path="*" element={<Navigate to="not-found"/>}/> */}
      </Routes>
      {/* // </BrowserRouter>
      // </HashRouter> */}
    </AuthProvider>
  )
}

// 自定义Redirect
function Redirect({to}) {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(to, {replace: true})
  }, [navigate, to])

  return null
}
