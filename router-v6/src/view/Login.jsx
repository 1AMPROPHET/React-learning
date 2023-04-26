import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate()
  const myRef = useRef('')

  return (
    <div>
      <input type="text" ref={myRef}/>
      <button onClick={() => {
        myRef.current.value && localStorage.setItem('token', myRef.current.value)
        navigate('/center')
      }}>登录</button>
    </div>
  )
}
