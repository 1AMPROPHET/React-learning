import React, { useState, useEffect, useMemo } from "react"
import axios from "axios"
import "./css/02-index.css"
import BetterScroll from "better-scroll"

export default function App() {
  const [myText, setMyText] = useState("")

  const {cinemaList} = useCinemaList()

  const valueChange = useMemo(
    () => (e) => {
      setMyText(e.target.value)
    },
    []
  )

  const {getCinemaList} = useFilter(cinemaList, myText)

  return (
    <div>
      <input value={myText} onChange={valueChange} />
      <div className="wrapper" style={{ height: "700px", overflow: "hidden" }}>
        <div className="content">
          {getCinemaList().map((item) => {
            return (
              <dl key={item.cinemaId}>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
              </dl>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// 自定义hooks，复用js逻辑，单独做成函数
function useCinemaList() {
  const [cinemaList, setCinemaList] = useState([])

  useEffect(() => {
    (async () => {
      let res = await reqData(110100, 1, 4880473)
      setCinemaList(res.data.data.cinemas)
      new BetterScroll(".wrapper", {})
    })()
  }, [])

  return {cinemaList}
}

function useFilter(cinemaList, myText) {
  const getCinemaList = useMemo(
    () => () => {
      return cinemaList.filter((item) => {
        return (
          item.name.toUpperCase().includes(myText.toUpperCase()) ||
          item.address.toUpperCase().includes(myText.toUpperCase())
        )
      })
    },
    [cinemaList, myText]
  )
  return {
    getCinemaList
  }
}

function request(option, method = "get") {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: "https://m.maizuo.com",
      timeout: 5000,
      method,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"16483109477462991008104449","bc":"110100"}',
        "X-Host": "mall.film-ticket.cinema.list",
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

function reqData(cityId, ticketFlag, k) {
  return request({
    url: "/gateway",
    params: {
      cityId,
      ticketFlag,
      k,
    },
  })
}
