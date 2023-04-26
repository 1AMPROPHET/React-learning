import React, { useState } from 'react'

export default function App() {
  // useState 记忆函数，记住状态
  const [count, setCount] = useState(0)

  // let myCount = 0

  return <div>
    <button onClick={() => {
      setCount(count + 1)
      // myCount++
    }}>add</button>
    {count}
  </div>
}
