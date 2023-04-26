import React from 'react'
import {
  Link,
  useResolvedPath,
  useLocation
} from 'react-router-dom'

export default function CustomLink({children, to, ...props}) {
  let location = useLocation()
  let resolved = useResolvedPath(to)
  // 使用useLocation判断路由是否匹配
  let isActive = location.pathname.indexOf(resolved.pathname) !== -1
  
  return (
    <Link replace
      style={{textDecoration: isActive ? 'underline': 'none', color: isActive ? 'darkCyan' : 'black', flex: 1}}
      to={to}
      {...props}
    >
      {children}
    </Link>
  )
}
