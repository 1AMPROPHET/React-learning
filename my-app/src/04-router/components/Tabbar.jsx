import React from 'react'
import CustomLink from '../router/CustomLink'
import '../css/tabbar.css'

export default function Tabbar() {
  return (
    <div className='tabbar'>
      <ul>
        <CustomLink to="/films">电影</CustomLink>
        <CustomLink to="/cinemas">影院</CustomLink>
        <CustomLink to="/center">我的</CustomLink>
      </ul>
    </div>
  )
}
