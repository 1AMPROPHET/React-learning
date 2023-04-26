import React, {useState, useEffect} from 'react'
import {reqFilmData} from '../api/index'

export default function App() {
  const [list, setlist] = useState([]);

  // 会频繁执行
  // reqFilmData().then(res => setlist(res.data.data.films))

  useEffect(() => {
    reqFilmData().then(res => setlist(res.data.data.films))
  }, []);

  return (
    <div>
      <ul>
        {
          list.length !== 0 && list.map(item => <li key={item.filmId}>{item.name}</li>)
        }
      </ul>
    </div>
  )
}
