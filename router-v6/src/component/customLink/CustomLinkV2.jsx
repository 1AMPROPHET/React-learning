import React from 'react'
import { Link, useLocation, useResolvedPath } from 'react-router-dom'
import './link.css'

export default function CustomLinkV2({to, children}) {
  const location = useLocation()
  const resolved = useResolvedPath(to)
  const isActive = location.pathname.indexOf(resolved.pathname) !== -1
  return (
    <Link
      className={isActive ? 'tabbarActive' : ''}
      to={to}
    >
      {children}
    </Link>
  )
}
