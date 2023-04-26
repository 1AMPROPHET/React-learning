import React from 'react'
import Auth from '../components/Auth'

export default function Login() {
  console.log(Auth())
  const {login, logout} = Auth()

  return (
    <div>
      <button onClick={() => login()}>登录</button>
      <button onClick={() => logout()}>登出</button>
    </div>
  )
}
