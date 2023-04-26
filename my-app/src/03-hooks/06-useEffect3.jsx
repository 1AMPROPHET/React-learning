import React, { useEffect, useState } from 'react'

export default function App () {

  const [isCreated, setIsCreated] = useState(true);

  return (
    <div>
      <button onClick={() => setIsCreated(!isCreated)}>click</button>
      {isCreated && <Child/>}
    </div>
  )
}

function Child () {

  useEffect(() => {
    window.onresize = () => {
      console.log('resize')
    }
    const timer = setInterval(() => {
      console.log('interval')
    }, 1000)
    // 只有在没有依赖的情况下执行
    return () => {
      window.onresize = null
      clearInterval(timer)
    }
  }, [])

  return <div>
    child
  </div>
}


