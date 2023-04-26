import React from 'react'
import CustomLink from './customLink/CustomLink'

export default function Tabbar() {

  const barText = [
    {text: '电影', id: '/films'}, 
    {text: '影院', id: "/cinemas"}, 
    {text: '我的', id: '/center'}
  ]

  return (
    <footer style={{position: 'fixed', bottom: 0, width: '100%'}}>
      <ul style={{display: 'flex'}}>
        {
          barText.map(item => {
            return (
              <li key={item.id} style={{flex: 1, textAlign: 'center'}}>
                <CustomLink to={item.id}>
                  {item.text}
                </CustomLink>
              </li>
            )
          })
        }
      </ul>
    </footer>
  )
}
