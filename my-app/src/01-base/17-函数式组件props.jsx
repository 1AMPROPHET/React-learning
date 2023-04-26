import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function App() {
  const obj = {
    text: '我的',
    leftShow: true
  }
  return (
    <div>
      <Navbar {...obj}/>
      <Sidebar bg="red" position="left"/>
      <Sidebar bg="cyan" position="right"/>
    </div>
  )
}
