import React from 'react'
import { useParams } from 'react-router-dom'
// import { useSearchParams } from 'react-router-dom'

export default function Detail() {

  // const [searchParams, setSearchParams] = useSearchParams()
  const params = useParams()

  return (
    <div>
      {/* <h2>Detail---{searchParams.get('id')}</h2> */}
      {/* <button onClick={() => setSearchParams({filmsId: 1000})}>猜你喜欢</button> */}
      <h2>Detail---{params.id}</h2>
      <button onClick={() => {}}>猜你喜欢</button>
    </div>
  )
}
