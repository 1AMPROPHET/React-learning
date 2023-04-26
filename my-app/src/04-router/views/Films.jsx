import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CustomSwiper from '../components/swiper/CustomSwiper'

export default function Films() {

  return (
    <div>
      <CustomSwiper/>
      <Navbar/>
      {/* 嵌套路由 */}
    {/* 弃用，使用outlet进行占位，路由统一在App中管理 */}
      {/* <Routes>
        <Route path='/films/nowplaying' element={<Nowplaying/>}/>
        <Route path='/films/comingsoon' element={<Comingsoon/>}/>
      </Routes> */}
      <Outlet/>
    </div>
  )
}
