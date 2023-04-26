import React from 'react'
import { Outlet } from 'react-router-dom'
// import CustomSwiper from '../../component/swiper/CustomSwiper'
import Navbar from '../../component/navbar/Navbar'
// 模块化引入样式module
import style from '../css/Film.module.css'

export default function Film() {
  return (
    <div>
      {/* <CustomSwiper/> */}
      <Navbar style={style}/>
      <Outlet></Outlet>
    </div>
  )
}
