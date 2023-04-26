import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import "./css/03-communication.css"
import BetterScoll from "better-scroll"
import GlobalContext from './js/GlobalContext'

// 创建context对象
// const GlobalContext = React.createContext()

export default function App () {

  const [films, setFilms] = useState([])
  const [info, setInfo] = useState('')

  useEffect(() => {
    const getFilmData = async () => {
      try {
        let res = await reqFilmData(110100, 1, 30, 1, 6801963)
        // console.log(res.data.data.films)
        setFilms(res.data.data.films)
        new BetterScoll(".wrapper", { click: true })
      } catch (error) {
        console.log(error)
      }
    }
    getFilmData()
  }, [])

  return (
    <GlobalContext.Provider value={{
      call: 'calling',
      info: info,
      changeInfo: (value) => {
        setInfo(value)
      }
    }}>
      <div className="wrapper">
        <div className="content">
          {films.map((film) => (
            <FilmItem key={film.filmId} {...film} />
          ))}
        </div>
        <FilmDetail />
      </div>
    </GlobalContext.Provider>
  )
}

// 受控组件
function FilmItem(props) {
  const value = useContext(GlobalContext)
  const { name, poster, grade, synopsis } = props
  return (
    <div
      className="filmItem"
      onClick={() => {
        value.changeInfo(synopsis)
      }}
    >
      <img src={poster} alt="" />
      <h4>{name}</h4>
      <div>观众评分: {grade}</div>
    </div>
  )
}

function FilmDetail() {

  const value = useContext(GlobalContext)

  return (
    <div className="filmDetail">
      {value.info}
    </div>
  )
}

function request(option, method = "get") {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: "https://m.maizuo.com",
      timeout: 5000,
      method,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"16483109477462991008104449"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    })

    instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        console.log(error)
      }
    )

    instance.interceptors.response.use(
      (res) => {
        return res
      },
      (error) => {
        console.log(error)
      }
    )

    instance(option)
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function reqFilmData(cityId, pageNum, pageSize, type, k) {
  return request({
    url: "/gateway",
    params: {
      cityId,
      pageNum,
      pageSize,
      type,
      k,
    },
  })
}
