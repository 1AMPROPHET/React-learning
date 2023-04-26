import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App () {

  const [type, setType] = useState(1);

  return (
    <div>
      <ul>
        <li onClick={() => setType(1)}>正在热映</li>
        <li onClick={() => setType(2)}>即将上映</li>
      </ul>

      <FilmList type={type}/>
    </div>
  )
}


function FilmList(props) {

  const [list, setList] = useState([])

  useEffect(() => {
    if (props.type === 1) {
      console.log('正在热映')
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2638754',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16483109477462991008104449"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data.data.films)
        setList(res.data.data.films)
      })
    } else {
      console.log('即将上映')
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=6788730',
        headers: {
         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16483109477462991008104449"}',
         'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data.data.films)
        setList(res.data.data.films)
      })
    }
  }, [props.type])
  
  return <div>
    {
      list.map(item => {
        return <li key={item.filmId}>{item.name}</li>
      })
    }
  </div>
}