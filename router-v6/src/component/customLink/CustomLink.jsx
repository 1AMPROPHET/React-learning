import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './link.module.css'

export default function CustomLink({to, children}) {
  return (
    <NavLink
      className={({isActive}) => isActive ? style.active : ''}
      style={{
        textDecoration: 'none'
      }}
      to={to}
      replace
    >
      {children}
    </NavLink>
  )
}
