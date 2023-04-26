import React, { useContext, useEffect, useReducer} from "react"
import axios from "axios"
import "./css/03-communication.css"
import BetterScoll from "better-scroll"
import GlobalContext from './js/GlobalContext'

// 创建context对象
// const GlobalContext = React.createContext()

const reducer = (preState, action) => {
  const newState = {...preState}
  switch (action.type) {
    case 'films':
      newState.films = action.value
      return newState
    case 'info':
      newState.info = action.value
      return newState
    default:
      return newState
  }
}

const initialState = {
  films: [],
  info: ''
}

export default function App () {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    // IIFE(Immediately Invoked Function Expression) 立即执行函数
    (async () => {
      try {
        let res = await reqFilmData(110100, 1, 30, 1, 6801963)
        // console.log(res.data.data.films)
        // setFilms(res.data.data.films)
        dispatch({type: 'films', value: res.data.data.films})
        new BetterScoll(".wrapper", { click: true })
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <GlobalContext.Provider value={{
      state,
      dispatch
    }}>
      <div className="wrapper">
        <div className="content">
          {state.films.map((film) => (
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
  const {dispatch} = useContext(GlobalContext)
  const { name, poster, grade, synopsis } = props
  return (
    <div
      className="filmItem"
      onClick={() => dispatch({type: 'info', value: synopsis})}
    >
      <img src={poster} alt="" />
      <h4>{name}</h4>
      <div>观众评分: {grade}</div>
    </div>
  )
}

function FilmDetail() {

  const {state} = useContext(GlobalContext)

  return (
    <div className="filmDetail">
      {state.info}
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
