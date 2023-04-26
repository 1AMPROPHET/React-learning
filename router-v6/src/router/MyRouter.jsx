import React from 'react'
import {Routes, Route} from 'react-router-dom'
// import Film from '../view/Film';
import Center from '../view/Center';
import Redirect from '../component/Redirect';
import Notfound from '../view/Notfound'
import Search from '../view/Search';
// import Nowplaying from '../view/Nowplaying'
// import Comingsoon from '../view/Comingsoon';
import Detail from '../view/Detail';
import Login from '../view/Login'
import AuthComponent from '../component/AuthComponent';

export default function MyRouter() {
  return (
    <Routes>
      {/* <Route path='/' element={<Film/>}/> */}
      {/* index用于嵌套路由，仅匹配父路径时，设置渲染的组件
      解决当前嵌套路由有多个子路由但本身无法默认渲染哪个路由的时候，可以增加index属性来指定默认路由 */}
      {/* <Route index element={<Film/>}/> */}
      <Route path='/films' element={LazyLoad('Film')}>
        {/* 重定向到nowplaying */}
        <Route index element={<Redirect to="/films/nowplaying"/>}/>
        <Route path="nowplaying" element={LazyLoad('Nowplaying')}/>
        <Route path="comingsoon" element={LazyLoad('Comingsoon')}/>
      </Route>
      <Route path='/cinemas' element={LazyLoad('Cinema')}/>
      <Route path='/cinemas/search' element={<Search/>}/>

      {/* 不同于V5的render，isAuth 三目运算只会执行一次，导致无法登录 */}
      {/* <Route path='/center' element={isAuth() ? <Center/> : <Redirect to="/login"/>}/> */}
      <Route path='/center' element={
        <AuthComponent>
          <Center/>
        </AuthComponent>
      }/>
      <Route path="/login" element={<Login/>}/>

      <Route path='/detail/:id' element={<Detail/>}/>
      {/* Navigate替代Redirect */}
      {/* <Route path='*' element={<Navigate to="/film"/>}/> */}
      {/* 自定义Redirect */}
      <Route path='/' element={<Redirect to="/film"/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
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
