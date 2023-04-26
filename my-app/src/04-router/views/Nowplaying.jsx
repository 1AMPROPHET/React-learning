import React, { useEffect, useReducer } from "react"
import { reqFilmData } from '../api/index'
import "../css/03-communication.css"
import BetterScoll from "better-scroll"
import GlobalContext from '../js/GlobalContext'
// import Bus from "../js/Bus"
import { useNavigate } from "react-router-dom"
import LazyLoad from 'react-lazyload'


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

export default function Nowplaying () {
  const [state, dispatch] = useReducer(reducer, initialState)

  // 编程式路由
  const navigate = useNavigate()

  useEffect(() => {
    // IIFE(Immediately Invoked Function Expression) 立即执行函数
    (async () => {
      try {
        let res = await reqFilmData(110100, 1, 30, 1, 6801963)
        // console.log(res.data.data.films)
        // setFilms(res.data.data.films)
        dispatch({type: 'films', value: res.data.data.films})
        new BetterScoll(".wrapper", { click: true, probeType: 3, bounce: false })
      } catch (error) {
        console.log(error)
      }
    })()
  }, [state.type])

  return (
    <GlobalContext.Provider value={{
      state,
      dispatch
    }}>      
      <div className="wrapper">
        <div className="content">
          <LazyLoad scrollContainer='.content' offset={200}>
            {state.films.map((film) => (
              <FilmItem key={film.filmId} {...film} navigate={navigate} />
            ))}
          </LazyLoad>
        </div>
      </div>
    </GlobalContext.Provider>
  )
}

// 受控组件
function FilmItem(props) {
  const { name, poster, grade, filmId, navigate } = props

  const goDetailPage = (id) => {
    navigate(`/detail/${id}`, {replace: true})
  }

  return (
    <div
      className="filmItem"
      onClick={() => goDetailPage(filmId)}
    >
      <img src={poster} alt={name} />
      <h4>{name}</h4>
      <div>观众评分: {grade}</div>
    </div>
  )
}
