import React from "react"
import { useNavigate } from "react-router-dom"

export default function FilmItem(props) {
  const navigate = useNavigate()

  const { filmId, poster } = props

  const handleClick = () => {
    // navigate(`/detail?id=${filmId}`)
    navigate(`/detail/${filmId}`, { replace: true })
  }

  return (
    <li
      style={{
        height: "94px",
        position: "relative",
        padding: "15px 0 15px 0",
        borderBottom: "1px solid #ccc",
      }}
      onClick={() => handleClick()}
    >
      <div
        style={{
          height: "94px",
          width: "66px",
          float: "left",
          position: "relative",
          display: "flex",
        }}
      >
        <img src={poster} alt="" style={{ width: "64px" }} />
      </div>
      <FilmInfo {...props} />
    </li>
  )
}

function FilmInfo({ name, grade, nation, runtime, actors }) {
  return (
    <div
      style={{ padding: "0 10px", float: "left", width: "calc(100% - 116px)" }}
    >
      <div>
        <span style={{ fontSize: "16px" }}>{name}</span>
        <span>{}</span>
      </div>
      <div>
        <span>观众评分: </span>
        <span style={{ color: "red" }}>{grade || "暂无"}</span>
      </div>
      <div
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: "100%",
          fontSize: '13px',
          color: '#777'
        }}
      >
        <span>
          主演：
          {actors.map((item) => item.name)}
        </span>
      </div>
      <div style={{
        fontSize: '13px',
        color: '#777'
      }}>
        <span>
          {nation} | {runtime}分钟
        </span>
      </div>
    </div>
  )
}
