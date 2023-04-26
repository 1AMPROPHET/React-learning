import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

  const [index, setIndex] = useState(1)
  const navigate = useNavigate()

  return (
    <div className='navbar'>
      <ul>
        <li className={index===1?'navActive':''} onClick={() => {
          navigate('/films/nowplaying')
          setIndex(1)
        }}>正在热映</li>
        <li className={index===2?'navActive':''} onClick={() => {
          navigate('/films/comingsoon')
          setIndex(2)
        }}>即将上映</li>
      </ul>
    </div>
  )
}
