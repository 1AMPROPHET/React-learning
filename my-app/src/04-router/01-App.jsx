import React from 'react'
import MyRouter from './router/MyRouter'
import Tabbar from './components/Tabbar'
// import { useNavigate } from 'react-router-dom'

export default function App() {
  // const navigate = useNavigate()
  return (
    <div>
      <MyRouter/>
      <Tabbar/>
    </div>
  )
}
