import React from 'react'
import { Navigate } from 'react-router-dom'

export default function AuthComponent({children}) {
  // 登陆权限
  const isLogin = localStorage.getItem('token')
  return (
    isLogin ? children : <Navigate to="/login" replace/>
  )
}
