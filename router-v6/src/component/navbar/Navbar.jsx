import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar({style}) {

  return (
    <div style={{width: '100%', display: 'flex'}}>
      <ul className={style.navbar}>
        <li>
          <NavLink to='/films/nowplaying' className={({isActive}) => isActive ? style.active : 'bar'}>
            正在热映
          </NavLink>
        </li>
        <li>
          <NavLink to='/films/comingsoon' className={({isActive}) => isActive ? style.active : 'bar'}>
            即将上映
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
