import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail(props) {
  let params = useParams()
  console.log(params)
  return (
    <div>
      detail-id:{params.id}
    </div>
  )
}
