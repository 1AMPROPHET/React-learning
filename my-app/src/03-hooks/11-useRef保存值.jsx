import React, { useRef, useState } from 'react'

export default function App() {

  const [count, setCount] = useState(0)

  const myCount = useRef(0)

  return (
    <div>
      <button onClick={() => {
        setCount(count+1)
        myCount.current++
      }}>click</button>
      app-{count}-{myCount.current}
    </div>
  )
}
