import React, { useEffect, useState } from 'react'
import { reqFilms } from '../../api'
import FilmItem from '../../component/filmItem/FilmItem'


export default function Nowplaying() {
  const [films, setFilms] = useState([])
  useEffect(() => {
    (async () => {
      try {
        let res = await reqFilms(110100, 1, 20, 1, 2039106)
        setFilms(res.data.data.films)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  return (
    <div>
      <div style={{
        height: '570px',
        overflow: 'auto',
      }}>
        <ul style={{margin: '0 15px 0 15px'}}>
          {
            films.map(film => {
              return (
                <FilmItem key={film.filmId} {...film}/>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
